import { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { Input } from "~/components/formcontrol/input";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Movies",
    description: "remix js react react.js react js web development application",
  };
};

export default function Movies() {
  return (
    <>
      <div className="flex h-10 w-screen items-center justify-between overflow-hidden bg-theme-fill px-2">
        <Link to="/playground/movies">
          <div className="ml-[145px] text-lg font-semibold text-theme-base">Movies</div>
        </Link>
      </div>

      <div id="MainContent" className="fixed h-[calc(100vh-40px)] w-screen overflow-y-auto overflow-x-hidden bg-theme-muted">
        <Outlet />;
        <div className="m-auto my-1 flex w-full items-center justify-center">
          <span className="flex text-sm text-theme-base">Movies API By </span>
          <a target={"_blank"} href="https://developers.themoviedb.org/3">
            <img className="mx-2 h-auto w-32" alt="themoviedb API" src={"/img/tmdb.svg"} />
          </a>
        </div>
      </div>
    </>
  );
}
