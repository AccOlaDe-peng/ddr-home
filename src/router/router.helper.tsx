/*
 * @Author: renchang.peng
 * @Date: 2024-12-23 15:40:58
 * @LastEditors: renchang.peng
 * @LastEditTime: 2024-12-24 09:26:20
 * @FilePath: /react-ddr-new/src/router/router.helper.tsx
 * @Description:
 */
import { Navigate, RouteObject } from "react-router-dom";
import { IRoute, MenuRoute } from "./routes";
import createLazyComponent from "./LazyLoad";
import RouteAuthWrapper from "./RouteAuthWrapper";

const getLayoutRoutes = (routes: IRoute[]) => {
  const layoutRoutes: IRoute[] = [];
  routes.forEach((route) => {
    const _route = { ...route };
    if (_route.layoutRender !== false) {
      if (_route.children) {
        _route.children = getLayoutRoutes(_route.children) as MenuRoute[];
      }
      layoutRoutes.push(_route);
    }
  });
  return layoutRoutes;
};

const getNoLayoutRoutes = (routes: IRoute[]) => {
  const noLayoutRoutes: IRoute[] = [];
  routes.forEach((route) => {
    const _route = { ...route };
    if (_route.children) {
      _route.children = getNoLayoutRoutes(_route.children) as MenuRoute[];
    }
    if (_route.layoutRender === false) {
      noLayoutRoutes.push(_route);
    }
  });
  return noLayoutRoutes;
};

/**
 * @description: 生成路由
 * @param {IRoute} routes
 * @return {*}
 */
const generateRoutes = (routes: IRoute[]) => {
  return routes.map((route) => {
    const routeItem: RouteObject = {
      path: route.path,
    };

    if (route.redirect) {
      routeItem.element = <Navigate to={route.redirect} />;
    }

    if (route.children) {
      routeItem.children = generateRoutes(route.children);
    }

    if (route.componentPath) {
      if (typeof route.componentPath === "string") {
        routeItem.element = route.auth ? (
          <RouteAuthWrapper codeKey={route.key}>
            {createLazyComponent(route.componentPath)}
          </RouteAuthWrapper>
        ) : (
          createLazyComponent(route.componentPath)
        );
      } else {
        routeItem.element = route.componentPath;
      }
    }

    return routeItem;
  });
};

export { getLayoutRoutes, getNoLayoutRoutes, generateRoutes };
