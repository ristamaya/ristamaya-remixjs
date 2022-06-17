import { json, MetaFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getMenusByGroup } from "~/models/setup-menu/menus.server";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Playground | GA",
    description: "remix js react react.js react js web development application",
  };
};

export async function loader() {
  const menus = await getMenusByGroup("setupmenus");

  return json(menus);
}

export default function Ga() {
  const menudata = useLoaderData();
  return (
    <>
      <div className="flex h-10 w-screen items-center justify-between bg-theme-fill px-2 shadow-lg">
        <Link to="/setup/menus">
          <div className="ml-[145px] text-lg font-semibold text-theme-base">menus</div>
        </Link>
      </div>
      <div
        id="MainContent"
        className="fixed h-[calc(100%-40px)] w-full overflow-auto bg-theme-muted"
      >
        <Outlet />
      </div>
    </>
  );
}
