import { json, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Menubar from "~/components/menubar";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Auth",
    description: "remix js react react.js react js web development application",
  };
};

export async function loader() {
  const menus = [
    {
      menuid: "0",
      createby: "Anjar",
      group: "auth",
      icon: "FiHome",
      parent: "",
      path: "/",
      pathtype: "internal",
      status: "active",
      title: "Home",
      order: 0,
      type: "url",
    },
    {
      menuid: "1",
      createby: "Anjar",
      group: "auth",
      icon: "FiFilm",
      parent: "",
      path: "/playground",
      pathtype: "internal",
      status: "active",
      title: "Playground",
      order: 1,
      type: "url",
    },
  ];

  return json(menus);
}

export default function Auth() {
  const menudata = useLoaderData();
  return (
    <div>
      <div id="Navbar" className="fixed z-10 flex h-16 w-screen items-center bg-theme-fill px-2 shadow-lg">
        <Menubar data={menudata} useIcon={true} />
      </div>

      <div id="MainContent" className="fixed top-16 h-[calc(100%-64px)] w-screen overflow-auto bg-theme-inverted">
        <Outlet />
      </div>
    </div>
  );
}
