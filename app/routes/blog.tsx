import { json, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Sidebar from "~/components/sidebarmenu";
import { getMenusByGroup } from "~/models/menus.server";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Blog",
    description: "remix js react react.js react js web development application",
  };
};

export async function loader() {
  const menus = getMenusByGroup("blog");
  return json(menus);
}

export default function Playground() {
  const menudata = useLoaderData();
  return (
    <div>
      <div className="fixed h-full w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
