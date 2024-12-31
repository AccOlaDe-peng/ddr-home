interface requestErrorMessageType {
  [key: number]: string;
}
export const REQUEST_ERROR_MESSAGE: requestErrorMessageType = {
  401: "未授权，请重新登录",
  403: "拒绝访问",
  404: "请求错误，未找到该资源",
  408: "请求超时",
  500: "服务器发生错误",
  501: "服务未实现",
  502: "服务异常",
  503: "服务不可用",
  504: "网络超时",
  505: "HTTP版本不受支持",
};
