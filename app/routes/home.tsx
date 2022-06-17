import { json, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Menubar from "~/components/menubar";
import { MenuIcon } from "~/components/menuicon";
import { getMenusByGroup } from "~/models/setup-menu/menus.server";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Home",
    description: "remix js react react.js react js web development application",
  };
};

export async function loader() {
  const menus = await getMenusByGroup("home");

  return json(menus);
}

export default function Home() {
  const menudata = useLoaderData();
  const userMenus = [
    {
      menuid: "0",
      createby: "Anjar",
      group: "auth",
      icon: "FiLogIn",
      parent: "",
      path: "/auth/login",
      pathtype: "internal",
      status: "active",
      title: "LogIn",
      order: 0,
      type: "url",
    },
    {
      menuid: "1",
      createby: "Anjar",
      group: "auth",
      icon: "FiLogOut",
      parent: "",
      path: "/auth/join",
      pathtype: "internal",
      status: "active",
      title: "Join",
      order: 1,
      type: "url",
    },
  ];

  return (
    <div>
      <div
        id="Navbar"
        className="fixed z-10 flex h-16 w-screen items-center bg-theme-fill px-2 text-theme-base shadow-lg"
      >
        <Menubar data={menudata} />
        <MenuIcon data={userMenus} />
      </div>

      <div
        id="MainContent"
        className="fixed top-16 h-[calc(100%-64px)] w-screen overflow-auto bg-theme-inverted"
      >
        <Outlet />
      </div>
    </div>
  );
}
