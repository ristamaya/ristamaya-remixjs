import type { menus } from "@prisma/client";
import MenuItem from "./menuitem";

interface props {
  useIcon?: boolean;
  data: menus[];
}

export default function Menubar({ useIcon, data }: props) {
  return (
    <div id="MenuBar" className="flex h-full w-full items-center justify-center overflow-auto overflow-y-hidden px-[4px]">
      {data.map((item, index) => (
        <MenuItem key={index} to={item.path} title={item.title} effect="bottom" icon={useIcon ? item.icon : ""} />
      ))}
    </div>
  );
}
