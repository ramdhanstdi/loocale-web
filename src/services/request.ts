import axios from "axios";
import { BE_URL } from "Config";
import addAuthHeader, { returnResponseData } from "./interceptor";

export const BASE_URL = BE_URL;

const request = axios.create({ baseURL: `${BASE_URL}/` });
request.interceptors.request.use(addAuthHeader());
request.interceptors.response.use(returnResponseData())
export default request;
