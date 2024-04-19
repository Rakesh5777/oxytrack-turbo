import apis from "@/services/api";
import { operations } from "@oxytrack/api-contract/dist/api";
import axios, { AxiosResponse, CancelTokenSource, RawAxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import useSWR, { SWRConfiguration } from "swr";

type CancelTokenSourceMap = Record<string, CancelTokenSource | undefined>;
const cancelTokenSources: CancelTokenSourceMap = {};
const functionKeyMap = {
  getCustomers: apis.customer.getCustomers.bind(apis.customer),
  getAllCylinders: apis.cylinder.getAllCylinders.bind(apis.cylinder),
};

type ResponseType<T extends keyof typeof functionKeyMap> = operations[T]["responses"][200]["content"]["application/json"];

function isRawAxiosRequestConfig(obj: any): obj is RawAxiosRequestConfig {
  // You can define your custom logic here to check if obj is of type RawAxiosRequestConfig
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}

const fetcher = async <T extends keyof typeof functionKeyMap>({ key, args }: FetcherArgs<T>, cancelTokenSource?: CancelTokenSource) => {
  const fetchDataFunction = functionKeyMap[key];
  let options = args?.[args?.length - 1];
  if (args && isRawAxiosRequestConfig(options)) {
    // options is of type RawAxiosRequestConfig
    options = {
      ...options,
      cancelToken: cancelTokenSource?.token,
    };
    args[args.length - 1] = options;
  } else if (args) {
    // options is not of type RawAxiosRequestConfig
    //@ts-ignore - args is an array of unknown length
    args = [...args, { cancelToken: cancelTokenSource?.token }];
  }
  try {
    if (fetchDataFunction) {
      // Pass the cancel token to the axios request config if pageIndex is provided
      //@ts-ignore - args is an array of unknown length
      const response = (await fetchDataFunction(...args)) as AxiosResponse<ResponseType<T>>;
      return response.data;
    } else {
      throw new Error(`Function for key "${key}" not found in functionKeyMap`);
    }
  } catch (error) {
    // If the request was canceled, don't throw an error
    if (!axios.isCancel(error)) {
      throw error;
    }
  }
};

type ApiFunctionParams<T extends keyof typeof functionKeyMap> = Parameters<(typeof functionKeyMap)[T]>;

type FetcherArgs<T extends keyof typeof functionKeyMap> = {
  key: T;
  config?: SWRConfiguration<any>;
  args?: ApiFunctionParams<T>;
};

type useCustomSWRArgs<T extends keyof typeof functionKeyMap> = {
  key: T;
  cancelPreviousRequest?: boolean;
  config?: SWRConfiguration<any>;
};

const useCustomSWR = <T extends keyof typeof functionKeyMap>(
  { key, cancelPreviousRequest = true, config }: useCustomSWRArgs<T>,
  ...args: ApiFunctionParams<T>
) => {
  const [firstTimeLoader, setFirstTimeLoader] = useState(true);

  const fetcherWithCancelToken = async (fetcherArgs: FetcherArgs<T>) => {
    // If there's an active request for this key, cancel it
    if (cancelTokenSources[key]) {
      cancelTokenSources[key]?.cancel("Request canceled due to new request");
      delete cancelTokenSources[key];
    }

    // Create a new cancel token source
    const cancelTokenSource = axios.CancelToken.source();
    cancelTokenSources[key] = cancelTokenSource;

    // Call the main fetcher function with the cancel token source
    return fetcher(fetcherArgs);
  };
  const result = useSWR({ key, args }, cancelPreviousRequest ? fetcherWithCancelToken : fetcher, config);

  useEffect(() => {
    if (firstTimeLoader && !result.isLoading) {
      setFirstTimeLoader(false);
    }
  }, [result.isLoading]);

  return { ...result, isInitialLoading: firstTimeLoader };
};

export default useCustomSWR;
