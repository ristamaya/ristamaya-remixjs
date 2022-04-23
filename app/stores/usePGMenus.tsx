import create from "zustand";
import { getMenusByGroup } from "~/models/menus.server";
import type { menus } from "@prisma/client";

interface menuState {
  menusPG: menus[];
  addMenu: (menusPG: menus) => void;
  clearMenu: () => void;
}

const useStore = create<menuState>((set) => ({
  menusPG: [],
  addMenu: (menu) =>
    set((state) => ({
      menusPG: [
        {
          menuid: menu.menuid,
          createby: menu.createby,
          group: menu.group,
          icon: menu.icon,
          parent: menu.parent,
          path: menu.path,
          pathtype: menu.pathtype,
          status: menu.status,
          title: menu.title,
          type: menu.type,
        },
        ...state.menusPG,
      ],
    })),
  clearMenu: () => set((state) => ({ menusPG: [] })),
}));

export default useStore;
