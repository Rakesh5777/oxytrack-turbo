import axios, { AxiosInstance } from "axios";
import { CustomerApi, MasterUserApi } from "@oxytrack/api-contract";
import { Configuration } from "@oxytrack/api-contract/configuration";
import axiosInstance from "@/axios/axiosInstance";

const config = new Configuration({});

function createApiInstance<T>(ApiClass: new (config: Configuration, basePath: string, axios: AxiosInstance) => T): T {
  return new ApiClass(config, "", axiosInstance);
}

const apis = {
  master: createApiInstance(MasterUserApi),
  customer: createApiInstance(CustomerApi),
};

export default apis;
