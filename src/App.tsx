import React from "react";
import { RouterProvider } from "react-router-dom";
import reactRouter from "./router/routes";

const App: React.FC = () => {
  return <RouterProvider router={reactRouter} />;
};

export default App;
