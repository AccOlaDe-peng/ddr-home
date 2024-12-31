import { MenuItem } from "@/types/menu";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  menu: Array<MenuItem>;
}

interface Actions {
  setMenu: (menu: Array<MenuItem>) => void;
}

const useUserStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        menu: [],
        setMenu: (menu: Array<MenuItem>) => set(() => ({ menu })),
      }),
      {
        name: "user-store",
      }
    )
  )
);

export default useUserStore;
