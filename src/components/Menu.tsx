import React from "react";
import { IRoute, MenuRoute } from "@/router/routes";
import { MenuItem } from "@/types/menu";
import { isMenuKeyFormStore } from "@/utils/tool/auth";
import { useSetState } from "@reactuses/core";
import { layoutRoutesConfig as routes } from "@/router/routes";
import { useNavigate } from "react-router-dom";
import type { ItemType } from "antd/es/menu/interface";
import { Menu } from "antd";

interface State {
  selectedKey: string;
}

const LayoutMenu: React.FC = () => {
  const navigate = useNavigate();
  //   const location = useLocation();

  const [state, setState] = useSetState<State>({
    selectedKey: "",
  });

  const menu: Array<MenuItem> = [];

  const getMenuData = (routes: IRoute[]) => {
    const menuData: IRoute[] = [];
    routes.forEach((route) => {
      const _route = { ...route };
      if (_route.menuRender !== false && isMenuKeyFormStore(menu, route.key!)) {
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

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[state.selectedKey ?? ""]}
      onClick={({ key }) => {
        setState({ selectedKey: key });
        navigate(key);
      }}
      items={generateMenuItems(menuData)}
    />
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
      //   icon: <IconComponent type={item.icon} />,
      children,
    } as ItemType);
  });
  return menu;
};

export default LayoutMenu;
