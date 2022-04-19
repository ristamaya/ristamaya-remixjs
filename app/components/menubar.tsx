import type { menus } from "@prisma/client";
import MenuItem from "./menuitem";

interface props {
  data: menus[];
}

export default function Menubar({ data }: props) {
  return (
    <div
      id="MenuBar"
      className="relative flex h-full w-full items-center justify-center overflow-auto overflow-y-hidden px-2"
    >
      {data.map((item, index) => (
        <MenuItem key={index} to={item.path} title={item.title} effect="bottom" />
      ))}
    </div>
  );
}
