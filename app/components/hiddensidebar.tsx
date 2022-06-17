import SidebarMenu from "./sidebarmenu";
import type { menus } from "@prisma/client";
import DynamicIcon from "./dynamicicon";
import { useState } from "react";

interface props {
  title: string;
  menudata: menus[];
  children: React.ReactNode;
}
export default function Hiddensidebar({ title, menudata, children }: props) {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <div className="absolute top-0 flex h-10 w-[150px] items-center bg-theme-fill px-2">
      <button
        onClick={(e) => setOpenSidebar(true)}
        className="peer flex w-auto items-center text-lg font-semibold text-theme-base"
      >
        <DynamicIcon icon="MdMenu" className="mr-1 h-6 w-6 text-base" />
        {title}
      </button>
      {openSidebar && (
        <div
          className="invisible fixed left-0 top-10 z-20 h-full w-auto min-w-[150px] -translate-x-full
          justify-between bg-theme-fill bg-opacity-95 py-1 pl-1 opacity-0 drop-shadow-lg transition-all duration-300
          hover:visible hover:translate-x-0 hover:opacity-100 peer-focus:visible peer-focus:translate-x-0 peer-focus:opacity-100"
        >
          <div className="max-h-[calc(100vh-100px)] overflow-auto">
            <SidebarMenu effect="bottom" data={menudata} className="mb-1 h-fit w-full" />
          </div>
          {children}
        </div>
      )}
    </div>
  );
}
