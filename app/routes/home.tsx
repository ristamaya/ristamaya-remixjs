import { json, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Menubar from "~/components/menubar";
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

  return (
    <div>
      <div id="Navbar" className="fixed z-10 block h-16 w-screen items-center bg-theme-fill shadow-lg">
        <Menubar data={menudata} />
      </div>

      <div id="MainContent" className="fixed top-16 h-[calc(100%-64px)] w-screen overflow-auto bg-theme-inverted">
        <Outlet />
      </div>
    </div>
  );
}
