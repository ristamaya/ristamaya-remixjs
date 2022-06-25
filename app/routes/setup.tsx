import { json, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import DynamicIcon from "~/components/dynamicicon";
import Hiddensidebar from "~/components/hiddensidebar";
import MenuItem from "~/components/menuitem";
import { getMenusByGroup } from "~/models/setup-menu/menus.server";

export const meta: MetaFunction = () => {
  return {
    title: "Tamhana | Setup",
    description: "remix js react react.js react js web development application",
  };
};

export async function loader() {
  const menus = await getMenusByGroup("setup");

  return json(menus);
}

export default function Core() {
  const menudata = useLoaderData();

  return (
    <>
      <Hiddensidebar title="Setup App" menudata={menudata}>
        <div className="relative w-full cursor-pointer">
          <div className="peer flex items-center justify-between text-theme-base">
            <MenuItem to="/home" title="Home" effect="bottom" icon="FiHome" />
            <DynamicIcon
              icon="FiChevronRight"
              className="absolute right-0 h-5 w-5 text-theme-base"
            />
          </div>
          <div
            className="invisible absolute top-0 right-0 grid w-0 translate-x-full grid-cols-1 overflow-x-hidden rounded-r-sm
                bg-theme-fill bg-opacity-95 p-2 text-theme-base opacity-0 transition-all duration-300 ease-in
                hover:visible hover:w-full hover:opacity-100 peer-hover:visible peer-hover:w-full peer-hover:opacity-100"
          >
            <MenuItem title="Playground" to="/playground" effect="bottom" icon="FiGrid" />
            <MenuItem title="Blog" to="/blog" effect="bottom" icon="FiBook" />
            <MenuItem title="About" to="/home/portfolio" effect="bottom" icon="FiSmile" />
          </div>
        </div>
      </Hiddensidebar>

      <Outlet />
    </>
  );
}
