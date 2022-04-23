import { json, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { menus } from "@prisma/client";
import SidebarMenu from "~/components/sidebarmenu";
import { getMenusByGroup } from "~/models/menus.server";
import MenuItem from "~/components/menuitem";

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

  return (
    <div>
      <div
        id="SideBar"
        className="fixed z-10 block h-screen w-9 overflow-y-auto overflow-x-hidden bg-theme-fill px-1 py-2 shadow-lg md:w-28"
      >
        <MenuItem to="/" title="Home" effect="bottom" icon="FiHome" />
        <hr className="mt-3 w-full border border-theme-base"></hr>
        <SidebarMenu effect="bottom" data={menudata} className="h-fit w-full" />
      </div>

      <div
        id="MainContent"
        className="fixed left-9 h-screen w-[calc(100vw-36px)] overflow-auto bg-theme-muted md:left-28 md:w-[calc(100vw-112px)]"
      >
        <Outlet />
      </div>
    </div>
  );
}
