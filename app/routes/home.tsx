import { json, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Menubar from "~/components/menubar";
import { MenuIcon } from "~/components/menuicon";
import { getMenusByGroup } from "~/models/menus.server";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Home",
    description: "remix js react react.js react js web development application",
  };
};

export async function loader() {
  const menus = await getMenusByGroup("home");

  // const menus = [
  //   {
  //     menuid: "624fead5cd8aa27ff6db3cec",
  //     createby: "Anjar",
  //     group: "home",
  //     icon: "",
  //     parent: "",
  //     path: "/",
  //     pathtype: "internal",
  //     status: "active",
  //     title: "Home",
  //     type: "url",
  //   },
  //   {
  //     menuid: "624feb66fcfcea6595c0e9dc",
  //     createby: "Anjar",
  //     group: "home",
  //     icon: "",
  //     parent: "",
  //     path: "/playground",
  //     pathtype: "internal",
  //     status: "active",
  //     title: "Playground",
  //     type: "url",
  //   },
  //   {
  //     menuid: "624febf4fcfcea6595c0e9de",
  //     createby: "Anjar",
  //     group: "home",
  //     icon: "",
  //     parent: "",
  //     path: "/blog",
  //     pathtype: "internal",
  //     status: "active",
  //     title: "Blog",
  //     type: "url",
  //   },
  //   {
  //     menuid: "624fec38fcfcea6595c0e9df",
  //     createby: "Anjar",
  //     group: "home",
  //     icon: "",
  //     parent: "",
  //     path: "/home/portfolio",
  //     pathtype: "internal",
  //     status: "active",
  //     title: "Portfolio",
  //     type: "url",
  //   },
  // ];
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
      <div id="Navbar" className="fixed z-10 flex h-16 w-screen items-center bg-theme-fill px-2 text-theme-base shadow-lg">
        <Menubar data={menudata} />
        <MenuIcon data={userMenus} />
      </div>

      <div id="MainContent" className="fixed top-16 h-[calc(100%-64px)] w-screen overflow-auto bg-theme-inverted">
        <Outlet />
      </div>
    </div>
  );
}
