import { Link } from "@remix-run/react";
import DynamicIcon from "./dynamicicon";

interface props {
  icon?: string;
  to: string;
  title: string;
  effect: "bottom" | "left" | "right";
}

function MenuItem({ icon, to, title, effect }: props) {
  let parentClass: string;
  let childClass: string;

  switch (effect) {
    case "bottom":
      parentClass = "h-fit w-fit px-1 justify-center";
      childClass = "bottom-0 left-0 duration-700";
      break;
    case "left":
      parentClass = "h-fit w-52 py-2 justify-left px-2";
      childClass = "bottom-0 left-0 duration-500";
      break;
    case "right":
      parentClass = "h-fit w-52 justify-right px-2";
      childClass = "bottom-0 right-0 duration-500";
      break;
  }

  return (
    <Link to={to} className="group">
      <div className="flex w-fit items-center py-1">
        {icon && <DynamicIcon className="h-6 w-6 text-theme-base" icon={icon} />}
        <div
          className={`relative ml-2 flex items-center overflow-hidden text-theme-base active:text-theme-muted ${parentClass}`}
        >
          <span
            className={`absolute h-[2px] w-0 bg-theme-muted transition-all ease-in-out group-hover:w-full ${childClass}`}
          ></span>
          {title}
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;
