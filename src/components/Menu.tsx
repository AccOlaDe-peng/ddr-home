import React from "react";
import { IRoute, MenuRoute } from "@/router/routes";
import { MenuItem } from "@/types/menu";
// import { isMenuKeyFormStore } from "@/utils/tool/auth";
import { useSetState } from "@reactuses/core";
import { layoutRoutesConfig as routes } from "@/router/routes";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ItemType } from "antd/es/menu/interface";
import { has, isObject } from "lodash";

interface State {
  selectedKey: string;
}

const LayoutMenu: React.FC = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useSetState<State>({
    selectedKey: "",
  });

  const menu: Array<MenuItem> = [];

  const getMenuData = (routes: IRoute[]) => {
    const menuData: IRoute[] = [];
    routes.forEach((route) => {
      const _route = { ...route };
      if (
        _route.menuRender !== false
        //  && isMenuKeyFormStore(menu, route.key!)
      ) {
        if (_route.children) {
          _route.children = getMenuData(_route.children) as MenuRoute[];
        }
        menuData.push(_route);
      }
    });
    return menuData;
  };

  const menuData: IRoute[] = React.useMemo(() => getMenuData(routes), [menu]);

  //   const updateMenuState = ({ selectedKey }: State) => {
  //     setState(() => ({
  //       selectedKey,
  //     }));
  //   };
  const menuConfig = generateMenuItems(menuData);

  return (
    <div className="flex">
      {menuConfig
        .filter((item) => item?.key !== "/")
        .map((item) => {
          const key = item?.key;
          if (isObject(item) && has(item, "label")) {
            const label = item.label as React.ReactNode;
            return (
              <Button
                key={key}
                onClick={() => typeof key === "string" && navigate(key)}
              >
                {label}
              </Button>
            );
          }
          return null;
        })}
    </div>
  );
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
