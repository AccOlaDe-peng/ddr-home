import axios, { type AxiosError } from "axios";
import { Modal } from "antd";
import { REQUEST_ERROR_MESSAGE } from "@/utils/constant/api";

const instance = axios.create({
  timeout: 30000,
});

/**
 * @description: 请求拦截器
 * @param {*} config
 * @return {*}
 */
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * @description: 响应拦截器
 * @param {*} response
 * @return {*}
 */
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    httpErrorStatusHandle(error);
    return Promise.reject(error);
  }
);

/**
 * @description: 错误状态码处理
 * @param {any} error
 * @return {*}
 */
const httpErrorStatusHandle = (error: AxiosError) => {
  let message = "";
  if (error && error.response) {
    message =
      REQUEST_ERROR_MESSAGE?.[error?.response?.status] ??
      "异常问题，请联系管理员！";
  }
  if (error.message.includes("timeout")) message = "网络请求超时！";
  if (error.message.includes("Network"))
    message = window.navigator.onLine
      ? "服务器无法链接，请检查网络或刷新页面！"
      : "您断网了！";

  Modal.error({ content: message, okText: "确定" });
};

export default instance;
