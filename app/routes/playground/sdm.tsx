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

export default function Sdm() {
  return (
    <>
      <div className="flex h-10 w-screen items-center justify-between bg-theme-fill px-2 shadow-lg">
        {" "}
        <div className="ml-[145px] text-lg font-semibold text-theme-base">SDM</div>
      </div>
      <div id="MainContent" className="fixed h-[calc(100%-40px)] w-full overflow-auto bg-theme-muted">
        <Outlet />
      </div>
    </>
  );
}
