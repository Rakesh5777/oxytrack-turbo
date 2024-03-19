import apis from "@/services/api";
import { PageSizeEnum } from "@oxytrack/api-contract";
import { operations } from "@oxytrack/api-contract/dist/api";
import { AxiosResponse } from "axios";
import useSWR, { SWRConfiguration } from "swr";

const functionKeyMap = {
  getCustomers: apis.customer.getCustomers.bind(apis.customer),
};

type ResponseType<T extends keyof typeof functionKeyMap> = operations[T]["responses"][200]["content"]["application/json"];

interface FetcherArgs<T extends keyof typeof functionKeyMap> {
  key: T;
  pageSize: PageSizeEnum;
  page: number;
  query?: string;
}

const fetcher = async <T extends keyof typeof functionKeyMap>({ key, pageSize, page, query }: FetcherArgs<T>) => {
  const fetchDataFunction = functionKeyMap[key];
  if (fetchDataFunction) {
    if (page !== undefined) {
      return fetchDataFunction(pageSize, page, query).then((res: AxiosResponse<ResponseType<T>>) => res.data);
    }
  } else {
    throw new Error(`Function for key "${key}" not found in functionKeyMap`);
  }
};

const getFetcherArgs = <T extends keyof typeof functionKeyMap>(key: T, pageSize: PageSizeEnum, page: number, query?: string): FetcherArgs<T> => {
  return { key, pageSize, page, query };
};

const useCustomSWR = <T extends keyof typeof functionKeyMap>({ key, page, pageSize, query }: FetcherArgs<T>, config?: SWRConfiguration<any>) => {
  return useSWR(getFetcherArgs(key, pageSize, page, query), fetcher, config);
};

export default useCustomSWR;
