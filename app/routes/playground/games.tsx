import { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Playground | Games",
    description: "remix js react react.js react js web development application",
  };
};

export default function Games() {
  return (
    <>
      <div className="flex h-10 w-screen items-center justify-between bg-theme-fill px-2 shadow-lg">
        <Link to="/playground/games">
          <div className="ml-[145px] text-lg font-semibold text-theme-base">Games</div>
        </Link>
      </div>
      <div id="MainContent" className="fixed h-[calc(100%-40px)] w-full overflow-auto bg-theme-muted">
        <Outlet />
      </div>
    </>
  );
}
