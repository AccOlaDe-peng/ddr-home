import { IRoute } from "./routes";

const routes: IRoute[] = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    componentPath: "dashboard/index",
  },
  {
    path: "/login",
    componentPath: "auth/login",
    layoutRender: false,
  },
];

export default routes;
