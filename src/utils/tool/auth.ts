import { MenuItem } from "@/types/menu";
import { isArray, isEmpty } from "lodash";

const isMenuKeyFormStore = (menu: Array<MenuItem>, key: string) => {
  if (!isArray(menu)) {
    return false;
  }
  for (const item of menu) {
    if (item.code === key) {
      return true;
    }
    if (!isEmpty(item?.children)) {
      if (isMenuKeyFormStore(item.children as Array<MenuItem>, key)) {
        return true;
      }
    }
  }
  return false;
};

export { isMenuKeyFormStore };
