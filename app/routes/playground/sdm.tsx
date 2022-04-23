import { json, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Menubar from "~/components/menubar";
import WorkOnIt from "~/components/workonit";
import { getMenusByGroup } from "~/models/menus.server";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Playground | SDM",
    description: "remix js react react.js react js web development application",
  };
};

export async function loader() {
  const menus = await getMenusByGroup("movies");

  return json(menus);
}

export default function Movies() {
  const menudata = useLoaderData();
  return (
    <div>
      <div id="Navbar" className="fixed z-10 block h-12 w-screen items-center bg-theme-fill shadow-lg">
        <div>SDM</div>
        <Menubar data={menudata} />
      </div>

      <div id="MainContent" className="fixed top-12 h-[calc(100%-48px)] w-full overflow-auto bg-theme-inverted">
        <Outlet />
      </div>
    </div>
  );
}
