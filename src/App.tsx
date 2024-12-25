import React from "react";
import { RouterProvider } from "react-router-dom";
import reactRouter from "./router/routes";
import { App } from "antd";

const MyApp: React.FC = () => {
  return (
    <App>
      <RouterProvider router={reactRouter} />
    </App>
  );
};

export default MyApp;
