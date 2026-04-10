import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const apiKey = import.meta.env.VITE_CATS_API_KEY;

    if (apiKey) {
      config.headers["x-api-key"] = apiKey;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
