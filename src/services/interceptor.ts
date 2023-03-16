import { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import https from "https";

const addAuthHeader = () => (config: AxiosRequestConfig<any>) => {
	config.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  const token = Cookies.get("token");
  if (!token) {
    return config;
  }
  config.headers!.Authorization = `Bearer ${token}`;
	return config
};

export const returnResponseData = () => (response: AxiosResponse<any>) => {
	return response.data;
}

export default addAuthHeader;
