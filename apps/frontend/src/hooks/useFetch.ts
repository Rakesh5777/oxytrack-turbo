import axiosInstance from "@/axios/axiosInstance";
import apis from "@/services/api";
import { PageSizeEnum } from "@oxytrack/api-contract";
import { operations } from "@oxytrack/api-contract/dist/api";
import { useEffect, useState } from "react";

type OperationKey = keyof operations;

interface FetcherArgs<T extends OperationKey> {
  key: T;
  pageSize?: PageSizeEnum;
  page?: number;
  query?: string;
}

function useFetch<T extends OperationKey>({ key, page, pageSize, query }: FetcherArgs<T>) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  function functionMapper(key: OperationKey) {
    switch (key) {
      case "getCustomers":
        return apis.customer.getCustomers.bind(apis.customer);
      case "createCustomer":
        return apis.customer.createCustomer.bind(apis.customer);
    }
  }

  async function fetchData() {
    setLoading(true);
    try {
      //@ts-ignore
      const response = await functionMapper(key)(pageSize, page, query);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [key, pageSize, page, query]);

  return { isLoading, error, data };
}

export default useFetch;
