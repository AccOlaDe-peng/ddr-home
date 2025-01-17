import React, { useCallback, useEffect, useMemo } from "react";
import { IRoute, MenuRoute } from "@/router/routes";
import { MenuItem } from "@/types/menu";
import { Button, Flex } from "antd";
// import { isMenuKeyFormStore } from "@/utils/tool/auth";
import { dropRight, has, isEmpty, isObject, join, last, split } from "lodash";
import { useEventListener, useSetState } from "@reactuses/core";
import { layoutRoutesConfig as routes } from "@/router/routes";
import { matchRoutes, useNavigate } from "react-router-dom";
import { ItemType } from "antd/es/menu/interface";

interface State {
  selectedKey: string;
}

const LayoutMenu: React.FC = () => {
  const navigate = useNavigate();

  const [state, setState] = useSetState<State>({
    selectedKey: "",
  });

  const menu: Array<MenuItem> = [];

  /**
   * @description: 获取菜单数据
   * @param {IRoute} routes
   * @return {*}
   */
  const getMenuData = (routes: IRoute[]) => {
    return routes.reduce((menuData: IRoute[], route) => {
      if (route.menuRender !== false) {
        if (
          route.menuRender !== false
          //  && isMenuKeyFormStore(menu, route.key!)
        ) {
          const _route = { ...route };
          if (_route.children) {
            _route.children = getMenuData(_route.children) as MenuRoute[];
          }
          menuData.push(_route);
        }
      }
      return menuData;
    }, []);
  };

  /**
   * @description: 监听浏览器前进后退事件
   * @return {*}
   */
  useEventListener(
    "popstate",
    () => {
      const menuState = handleMenuState(location);
      updateMenuState(menuState);
    },
    window
  );

  const menuData: IRoute[] = useMemo(() => getMenuData(routes), [menu]);

  /**
   * @description: 更新菜单状态
   * @param {State} param1
   * @return {*}
   */
  const updateMenuState = useCallback(
    ({ selectedKey }: State) => {
      setState(() => ({
        selectedKey,
      }));
    },
    [setState]
  );

  /**
   * @description: 初始监听路由变化
   * @return {*}
   */
  useEffect(() => {
    if (menuData.length === 0) {
      return;
    }
    const menuState = handleMenuState(location);
    if (menuState.selectedKey !== state.selectedKey) {
      updateMenuState(menuState);
    }
  }, [menuData, state.selectedKey, updateMenuState]);

  const menuConfig = generateMenuItems(menuData);

  /**
   * @description: 菜单跳转
   * @param {string} key
   * @return {*}
   */
  const handleSkipTo = (key: string) => {
    setState({ selectedKey: key });
    navigate(key);
  };

  /**
   * @description: 菜单按钮
   * @param {ItemType} item
   * @return {*}
   */
  const MenuButton = (item: ItemType) => {
    const key = item?.key;
    if (isObject(item) && has(item, "label")) {
      const label = item.label as React.ReactNode;
      return (
        <Button
          type="text"
          style={{
            color: state.selectedKey === key ? "#fff" : "#ccc",
          }}
          className="hover:bg-[#494f55]"
          size="large"
          key={key}
          onClick={() => typeof key === "string" && handleSkipTo(key)}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#494f55")
          }
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
        >
          {label}
        </Button>
      );
    }
    return null;
  };

  return (
    <Flex align="center" gap={10}>
      {menuConfig
        .filter((item) => item?.key !== "/")
        .map((item) => MenuButton(item))}
    </Flex>
  );
};

/**
 * @description: 处理菜单状态
 * @param {Location} location
 * @return {*}
 */
const handleMenuState = (location: Location) => {
  const currentPageMatchRoutes = matchRoutes(routes, location);
  if (!currentPageMatchRoutes) {
    return { selectedKey: "" };
  }
  const selectRoute = last(currentPageMatchRoutes);
  // //将isChild加入新的校验
  // if (some(currentPageMatchRoutes, (r) => !isUndefined(r.route.isChild))) {
  //     const rvRoutes = reverse(currentPageMatchRoutes);
  //     const selectRouteIndex = findIndex(rvRoutes, (o) => !!o.route.isChild);
  //     selectRoute = rvRoutes[selectRouteIndex];
  //     openKeys = (map(rvRoutes, (i) => i.route.path).slice(selectRouteIndex, rvRoutes.length) ??
  //         []) as string[];
  // } else {
  //     selectRoute = last(currentPageMatchRoutes);
  //     openKeys = (currentPageMatchRoutes?.map((item) => item.route.path).slice(0, -1) ??
  //         []) as string[];
  // }

  let selectedKey: string = selectRoute!.pathnameBase;

  if (selectRoute?.route.menuRender === false) {
    const parentPath = join(dropRight(split(selectRoute.route.path, "-")), "/");
    if (!isEmpty(parentPath)) {
      // const parentMatchRoute = matchRoutes(routes, parentPath);
      // openKeys = (parentMatchRoute?.map((item) => item.route.path).slice(0, -1) ??
      //     []) as string[];
      selectedKey = parentPath;
    }
  }

  return { selectedKey };
};

/**
 * 菜单配置数据生成Menu组件用数据
 * @param {MenuItem[]} data
 * @returns
 */
const generateMenuItems = (data: IRoute[]): ItemType[] => {
  const menu: ItemType[] = [];
  data.forEach((item) => {
    let children;
    if (item.children) {
      children = generateMenuItems(item.children);
    }
    menu.push({
      key: item.path,
      label: item.name,
      children,
    } as ItemType);
  });
  return menu;
};

export default LayoutMenu;
