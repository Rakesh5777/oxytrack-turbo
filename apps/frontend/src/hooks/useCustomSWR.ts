import apis from "@/services/api";
import { operations } from "@oxytrack/api-contract/dist/api";
import axios, { AxiosResponse, CancelTokenSource, RawAxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import useSWR, { SWRConfiguration } from "swr";

type CancelTokenSourceMap = Record<string, CancelTokenSource | undefined>;
const cancelTokenSources: CancelTokenSourceMap = {};
const functionKeyMap = {
  getCustomers: apis.customer.getCustomers.bind(apis.customer),
};

type ResponseType<T extends keyof typeof functionKeyMap> = operations[T]["responses"][200]["content"]["application/json"];

interface FetcherArgs<T extends keyof typeof functionKeyMap> {
  key: T;
  pageSize: number;
  pageIndex: number;
  query?: string;
  type?: string[];
  options?: RawAxiosRequestConfig;
  cancelPreviousRequest?: boolean;
}

const fetcher = async <T extends keyof typeof functionKeyMap>(
  { key, pageSize, pageIndex, query, type, options }: FetcherArgs<T>,
  cancelTokenSource?: CancelTokenSource,
) => {
  const fetchDataFunction = functionKeyMap[key];

  try {
    if (fetchDataFunction) {
      if (pageIndex !== undefined) {
        // Pass the cancel token to the axios request config
        const response = (await fetchDataFunction(pageSize, pageIndex, query, type, {
          ...options,
          cancelToken: cancelTokenSource?.token,
        })) as AxiosResponse<ResponseType<T>>;
        return response.data;
      }
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

const useCustomSWR = <T extends keyof typeof functionKeyMap>(
  { key, pageIndex, pageSize, query, type, options, cancelPreviousRequest = true }: FetcherArgs<T>,
  config?: SWRConfiguration<any>,
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
    return fetcher(fetcherArgs, cancelTokenSource);
  };

  const result = useSWR(
    getFetcherArgs(key, pageSize, pageIndex, query, type, options),
    cancelPreviousRequest ? fetcherWithCancelToken : fetcher,
    config,
  );
  useEffect(() => {
    if (firstTimeLoader && !result.isLoading) {
      setFirstTimeLoader(false);
    }
  }, [result.isLoading]);
  return { ...result, isInitialLoading: firstTimeLoader };
};

const getFetcherArgs = <T extends keyof typeof functionKeyMap>(
  key: T,
  pageSize: number,
  pageIndex: number,
  query?: string,
  type?: string[],
  options?: RawAxiosRequestConfig,
  cancelPreviousRequest?: boolean,
): FetcherArgs<T> => {
  return { key, pageSize, pageIndex, query, type, options, cancelPreviousRequest };
};

export default useCustomSWR;
