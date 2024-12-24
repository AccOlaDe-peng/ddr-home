import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import reactRouter from "./router/routes";

const App: React.FC = () => {
  const AppRouter = () => useRoutes(reactRouter, import.meta.env.BASE_URL);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
