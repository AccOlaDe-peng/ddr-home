/*
 * @Author: renchang.peng
 * @Date: 2024-12-23 15:45:59
 * @LastEditors: renchang.peng
 * @LastEditTime: 2025-01-02 10:16:52
 * @FilePath: /react-ddr-new/src/router/routes.tsx
 * @Description:
 */
import { createBrowserRouter } from "react-router-dom";
import NoFound from "@/components/NoFound";
import ErrorPage from "@/components/ErrorPage";
import Layout from "@/components/Layout";
import {
  generateRoutes,
  getLayoutRoutes,
  getNoLayoutRoutes,
} from "./router.helper";
import routes from "./router.config";

/**
 * @description:  合并两个类型
 * @return {*}
 */
type MergeExclusive<T, U> =
  | (T & { [K in Exclude<keyof U, keyof T>]?: never })
  | (U & { [K in Exclude<keyof T, keyof U>]?: never });

/**
 * @description: 合并两个类型，并设置某些属性为可选
 * @return {*}
 */
type SetOptional<BaseType, Keys extends keyof BaseType> = Omit<BaseType, Keys> &
  Partial<Pick<BaseType, Keys>>;

/**
 * @description: 菜单项的基础类型
 * @return {*}
 */
interface BaseMenuItem {
  // 菜单key 同时也是菜单path
  // 菜单名称 同时也是面包屑名称
  key: string;
  name: string;
  path: string;
  auth?: boolean;
  // 页面组件地址，基于pages文件夹下
  componentPath?: React.ReactElement<any, any> | string;
}

/**
 * @description: 自定义路由
 * @return {*}
 */
type CustomRoute = Omit<BaseMenuItem, "key" | "name" | "icon"> & {
  layoutRender?: false;
};

/**
 * @description: 菜单项的基础类型
 * @return {*}
 */
interface NoStateBaseMenuItem {
  menuRender: false;
  // 当打开一个非菜单页面（也就是页面的menuRender为false）想让菜单的某一项高亮，那么把此属性设为高亮菜单页面的key。
}

/**
 * @description:  重定向菜单项
 * @return {*}
 */
interface RedirectMenuItem extends NoStateBaseMenuItem {
  path: string;
  redirect: string;
}

/**
 * @description: 菜单项的基础类型
 * @return {*}
 */
type NoStateMenuItem = BaseMenuItem & NoStateBaseMenuItem;

/**
 * @description: 菜单项的路由类型
 * @return {*}
 */
type MenuItemRoute = MergeExclusive<
  MergeExclusive<BaseMenuItem, RedirectMenuItem>,
  NoStateMenuItem
>;

/**
 * @description: 菜单项的折叠路由类型
 * @return {*}
 */
type MenuFoldRoute = SetOptional<
  Omit<MenuItemRoute, "componentPath" | "layoutRender" | "parentKey">,
  "path"
> & {
  children?: Array<MergeExclusive<MenuItemRoute, MenuFoldRoute>>;
};

export type MenuRoute = MergeExclusive<MenuItemRoute, MenuFoldRoute>;

export type IRoute = MergeExclusive<CustomRoute, MenuRoute>;

export const layoutRoutesConfig = getLayoutRoutes(routes);

const noLayoutRoutesConfig = getNoLayoutRoutes(routes);

const reactRouter = createBrowserRouter(
  [
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: generateRoutes(layoutRoutesConfig),
    },
    {
      errorElement: <ErrorPage />,
      children: generateRoutes(noLayoutRoutesConfig),
    },
    {
      path: "*",
      element: <NoFound />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default reactRouter;
