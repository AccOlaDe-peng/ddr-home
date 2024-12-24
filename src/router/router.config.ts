import { IRoute } from "./routes";

const routes: IRoute[] = [
  {
    path: "/",
    redirect: "/test",
  },
  {
    path: "/test",
    name: "Test",
    key: "test",
    componentPath: "test/index",
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
