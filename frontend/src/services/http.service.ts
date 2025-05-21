import axios from "axios";

export const httpService = axios.create({
  baseURL: process.env.REACT_APP_CODESPACE_BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors
    console.error("HTTP error", error);
    return Promise.reject(error);
  }
);
