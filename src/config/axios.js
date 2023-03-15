import axios from "axios";
import { getAccessToken, getAccessTokenAdmin } from "../utils/local-storage";

// console.log(process.env.REACT_APP_ENDPOINT_URL);
axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;

axios.interceptors.request.use(
  (config) => {
    if (getAccessToken() || getAccessTokenAdmin()) {
      config.headers.authorization = `Bearer ${
        getAccessToken() || getAccessTokenAdmin()
      }`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default axios;
