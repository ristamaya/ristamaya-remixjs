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
  // const menus = await getMenusByGroup("home");
  const menus = [
    {
      menuid: "624fead5cd8aa27ff6db3cec",
      createby: "Anjar",
      group: "home",
      icon: "",
      parent: "",
      path: "/",
      pathtype: "internal",
      status: "active",
      title: "Home",
      type: "url",
    },
    {
      menuid: "624feb66fcfcea6595c0e9dc",
      createby: "Anjar",
      group: "home",
      icon: "",
      parent: "",
      path: "/home/playground",
      pathtype: "internal",
      status: "active",
      title: "Playground",
      type: "url",
    },
    {
      menuid: "624febf4fcfcea6595c0e9de",
      createby: "Anjar",
      group: "home",
      icon: "",
      parent: "",
      path: "/home/blog",
      pathtype: "internal",
      status: "active",
      title: "Blog",
      type: "url",
    },
    {
      menuid: "624fec38fcfcea6595c0e9df",
      createby: "Anjar",
      group: "home",
      icon: "",
      parent: "",
      path: "/home/about",
      pathtype: "internal",
      status: "active",
      title: "About",
      type: "url",
    },
  ];
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
