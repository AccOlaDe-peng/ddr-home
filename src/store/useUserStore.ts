import { MenuItem } from "@/types/menu";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  menu: Array<MenuItem>;
  token: string;
}

interface Actions {
  setMenu: (menu: Array<MenuItem>) => void;
  setToken: (token: string) => void;
}

const useUserStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        menu: [],
        token: "",
        setMenu: (menu: Array<MenuItem>) => set(() => ({ menu })),
        setToken: (token: string) => set(() => ({ token })),
      }),
      {
        name: "user-store",
      }
    )
  )
);

export default useUserStore;
