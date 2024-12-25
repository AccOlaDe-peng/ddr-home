import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Inspector } from "react-dev-inspector";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import App from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1976d2",
          borderRadius: 4,
          colorError: "#d92b35",
        },
      }}
      locale={zhCN}
    >
      {process.env.NODE_ENV === "development" ? (
        <Inspector keys={["F4"]} />
      ) : (
        <Fragment />
      )}
      <App />
    </ConfigProvider>
  </StrictMode>
);
