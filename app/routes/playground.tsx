import { json, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { menus } from "@prisma/client";
import SidebarMenu from "~/components/sidebarmenu";
import { getMenusByGroup } from "~/models/menus.server";
import MenuItem from "~/components/menuitem";
import { useState } from "react";
import DynamicIcon from "~/components/dynamicicon";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Playground",
    description: "remix js react react.js react js web development application",
  };
};

export async function loader() {
  const menus = await getMenusByGroup("playground");

  return json(menus);
}

export default function Playground() {
  const menudata: menus[] = useLoaderData();
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div>
      <div className="absolute top-0 flex h-10 w-[150px] items-center bg-theme-fill px-2">
        <button
          onClick={(e) => setOpenSidebar(true)}
          className="peer flex w-auto items-center text-lg font-semibold text-theme-base"
        >
          <DynamicIcon icon="MdMenu" className="mr-1 h-6 w-6 text-base" />
          Playground
        </button>
        {openSidebar && (
          <div
            id="SideBar"
            className="invisible fixed left-0 top-10 z-20 h-full w-auto min-w-[150px] -translate-x-full
            justify-between bg-theme-fill bg-opacity-95 py-1 pl-1 opacity-0 drop-shadow-lg transition-all duration-300
            hover:visible hover:translate-x-0 hover:opacity-100 peer-focus:visible peer-focus:translate-x-0 peer-focus:opacity-100"
          >
            <div className="max-h-[calc(100vh-100px)] overflow-auto">
              <SidebarMenu effect="bottom" data={menudata} className="mb-1 h-fit w-full" />
            </div>

            <div className="relative w-full cursor-pointer">
              <div className="peer flex items-center justify-between text-theme-base">
                <MenuItem to="/home" title="Home" effect="bottom" icon="FiHome" />
                <DynamicIcon icon="FiChevronRight" className="absolute right-0 h-5 w-5 text-theme-base" />
              </div>
              <div
                className="invisible absolute top-0 right-0 grid -translate-x-full grid-cols-1 rounded-r-sm bg-theme-fill
                bg-opacity-95 p-2 text-theme-base opacity-0 transition-all duration-300 ease-in-out
                hover:visible hover:translate-x-full hover:opacity-100 peer-hover:visible peer-hover:translate-x-full peer-hover:opacity-100"
              >
                <MenuItem title="Playground" to="/playground" effect="bottom" icon="FiGrid" />
                <MenuItem title="Blog" to="/blog" effect="bottom" icon="FiBook" />
                <MenuItem title="About" to="/home/portfolio" effect="bottom" icon="FiSmile" />
              </div>
            </div>
          </div>
        )}
      </div>

      <Outlet />
    </div>
  );
}
