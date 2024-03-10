import axios, { AxiosInstance } from "axios";
import { MasterUserApi } from "@oxytrack/api-contract";
import { Configuration } from "@oxytrack/api-contract/configuration";

const serverUrl = "http://localhost:3000";
const config = new Configuration({});

const axiosInstance = axios.create({
  baseURL: `${serverUrl}/api/v1`,
});

axiosInstance.interceptors.request.use(
  (request) => {
    // Modify request here before sending it
    console.log("Starting Request", request);
    return request;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify response here before it's passed to then/catch
    console.log("Response:", response);
    return response;
  },
  (error) => {
    // Handle response error here
    return Promise.reject(error);
  },
);

function createApiInstance<T>(ApiClass: new (config: Configuration, basePath: string, axios: AxiosInstance) => T): T {
  return new ApiClass(config, "", axiosInstance);
}

// Usage
const apis = {
  master: createApiInstance(MasterUserApi),
};

export default apis;
