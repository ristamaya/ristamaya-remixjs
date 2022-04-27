import { json, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Input } from "~/components/formcontrol/input";
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
      </div>

      <div
        id="MainContent"
        className="fixed top-10 h-[calc(100%-40px)] w-full max-w-[calc(100vw-36px)] overflow-auto bg-theme-muted md:max-w-[calc(100vw-112px)]"
      >
        <Outlet />

        <div className="m-auto mt-6 flex w-full items-center justify-center">
          <span className="flex text-sm text-theme-base">Movies API By </span>
          <a target={"_blank"} href="https://developers.themoviedb.org/3">
            <img className="mx-2 h-auto w-44" alt="themoviedb API" src={"/img/tmdb.svg"} />
          </a>
        </div>
      </div>
    </>
  );
}
