import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Playground | Movies",
    description: "remix js react react.js react js web development application",
  };
};

export default function Movies() {
  return (
    <>
      <div id="MainContent" className="fixed h-[calc(100vh-40px)] w-full overflow-auto bg-theme-muted">
        <Outlet />
        <div className="m-auto my-3 flex w-full items-center justify-center">
          <span className="flex text-sm text-theme-base">Movies API By </span>
          <a target={"_blank"} href="https://developers.themoviedb.org/3">
            <img className="mx-2 h-auto w-32" alt="themoviedb API" src={"/img/tmdb.svg"} />
          </a>
        </div>
      </div>
    </>
  );
}
