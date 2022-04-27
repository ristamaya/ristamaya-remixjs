import create from "zustand";
import type { menus } from "@prisma/client";

interface menuState {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

const useStore = create<menuState>((set) => ({
  keyword: "180547",
  setKeyword: (keyword) => set((state) => ({ keyword: keyword })),
}));

export default useStore;
