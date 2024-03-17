import apis from "@/services/api";
import { PageSizeEnum } from "@oxytrack/api-contract";
import { operations } from "@oxytrack/api-contract/dist/api";
import useSWR, { SWRConfiguration } from "swr";

type OperationKey = keyof operations;

interface FetcherArgs<T extends OperationKey> {
  key: T;
  pageSize?: PageSizeEnum;
  page?: number;
  query?: string;
}

const fetcher = async <T extends OperationKey>({ key, pageSize, page, query }: FetcherArgs<T>) => {
  const functionKeyMap: {
    [Key in OperationKey]?: any;
  } = {
    getCustomers: apis.customer.getCustomers.bind(apis.customer),
  };
  const fetchDataFunction = functionKeyMap[key];
  if (fetchDataFunction) {
    if (page !== undefined) {
      return fetchDataFunction(pageSize, page, query).then((res: any) => res.data);
    } else {
      return fetchDataFunction(query).then((res: any) => res.data);
    }
  } else {
    throw new Error(`Function for key "${key}" not found in functionKeyMap`);
  }
};

const getFetcherArgs = <T extends OperationKey>(key: T, pageSize?: PageSizeEnum, page?: number, query?: string): FetcherArgs<T> => {
  return { key, pageSize, page, query };
};

const useCustomSWR = <T extends OperationKey>(
  { key, page, pageSize, query }: FetcherArgs<T>,
  config?: SWRConfiguration<any, any, (arg: FetcherArgs<T>) => any>,
) => {
  return useSWR(getFetcherArgs(key, pageSize, page, query), fetcher, config);
};

export default useCustomSWR;
