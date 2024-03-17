import axios from "axios";

const serverUrl = "http://localhost:3000/api/v1";
const axiosInstance = axios.create({
  baseURL: `${serverUrl}`,
});

axiosInstance.interceptors.request.use(
  (request) => {
    // Modify request here before sending it
    console.log(request);
    const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")!) : null;
    if (token) request.headers["Authorization"] = `Bearer ${token}`;
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
    return response;
  },
  (error) => {
    // Handle response error here
    return Promise.reject(error);
  },
);

export default axiosInstance;
