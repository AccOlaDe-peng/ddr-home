import { IRoute } from "./routes";

const routes: IRoute[] = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    key: "dashboard",
    name: "Dashboard",
    componentPath: "dashboard/index",
  },
  {
    path: "/login",
    componentPath: "auth/login",
    layoutRender: false,
  },
];

export default routes;
