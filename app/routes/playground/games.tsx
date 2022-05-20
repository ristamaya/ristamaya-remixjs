import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Playground | Games",
    description: "remix js react react.js react js web development application",
  };
};

export default function Movies() {
  return (
    <div>
      <div id="MainContent" className="fixed h-[calc(100%-40px)] w-full overflow-auto bg-theme-inverted">
        <Outlet />
      </div>
    </div>
  );
}
