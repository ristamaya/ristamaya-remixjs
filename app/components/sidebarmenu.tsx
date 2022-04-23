import type { menus } from "@prisma/client";
import MenuItem from "./menuitem";

interface props {
  effect: "bottom" | "left" | "right";
  data: menus[];
  className?: String;
}

export default function SidebarMenu({ effect, data, className }: props) {
  return (
    <div id="SideBar" className={`relative flex-row py-2 ${className}`}>
      {data.map((item, index) => (
        <MenuItem key={index} to={item.path} title={item.title} effect={effect} icon={item.icon} />
      ))}
    </div>
  );
}
