import { json, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Menubar from "~/components/menubar";
import { getMenusByGroup } from "~/models/menus.server";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Playground | Movies",
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
    <>
      <div
        id="Navbar"
        className="fixed z-20 flex h-10 w-full max-w-[calc(100vw-36px)] items-center justify-between overflow-x-auto overflow-y-hidden bg-theme-fill shadow-lg md:max-w-[calc(100vw-112px)]"
      >
        <Menubar data={menudata} />
        <div className="flex text-center font-semibold text-theme-base">Movie List</div>
      </div>

      <div
        id="MainContent"
        className="fixed top-10 h-[calc(100%-40px)] w-full max-w-[calc(100vw-36px)] overflow-auto bg-theme-inverted md:max-w-[calc(100vw-112px)]"
      >
        <Outlet />
      </div>
    </>
  );
}
