import { json, MetaFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getMenusByGroup } from "~/models/setup-menu/menus.server";

export const meta: MetaFunction = () => {
  return {
    title: "Text To Speech",
    description: "Free Online text to speech with unlimited words",
  };
};

export async function loader() {
  const menus = await getMenusByGroup("tts");

  return json(menus);
}

export default function TTS() {
  const menudata = useLoaderData();
  return (
    <>
      <div className="flex h-10 w-screen items-center justify-between bg-theme-fill px-2 shadow-lg">
        <Link to="/playground/tts">
          <div className="ml-[145px] text-lg font-semibold text-theme-base">Text to speech</div>
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
