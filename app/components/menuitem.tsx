import { Link } from "@remix-run/react";

interface props {
  to: string;
  title: string;
  effect: "bottom" | "left" | "right";
}

function MenuItem({ to, title, effect }: props) {
  let parentClass: string;
  let childClass: string;

  switch (effect) {
    case "bottom":
      parentClass = "h-16 w-fit px-2 justify-center";
      childClass = "bottom-[18px] left-0 duration-700";
      break;
    case "left":
      parentClass = "h-full w-52 py-2 justify-left px-2";
      childClass = "bottom-[6px] left-0 duration-500";
      break;
    case "right":
      parentClass = "h-full w-52 py-2 justify-right px-2";
      childClass = "bottom-[6px] right-0 duration-500";
      break;
  }

  return (
    <Link to={to}>
      <button
        className={`group relative flex items-center overflow-hidden text-theme-base active:text-theme-muted ${parentClass}`}
      >
        <span
          className={`absolute h-[2px] w-0 bg-theme-muted transition-all ease-in-out group-hover:w-full ${childClass}`}
        ></span>
        {title}
        {/* <span className="absolute left-0 bottom-2 h-[2px] w-0 bg-theme-muted transition-all duration-500 ease-in-out group-hover:w-full"></span> */}
      </button>
    </Link>
  );
}

export default MenuItem;
