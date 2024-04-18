import axios from "axios";
import { store } from "..";
import {
  setIsLoadingOff,
  setIsLoadingOn,
} from "../redux/spinnerSlice/spinnerSlice";
import { TOKEN_CYBERSOFT } from "./constant";

export const https = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Lấy accessToken từ localStorage mỗi lần request
    const userLogin = localStorage.getItem("USER_LOGIN");
    const accessToken = userLogin ? JSON.parse(userLogin).accessToken : null;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    store.dispatch(setIsLoadingOn());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    store.dispatch(setIsLoadingOff());
    return response;
  },
  function (error) {
    store.dispatch(setIsLoadingOff());
    return Promise.reject(error);
  }
);
