import type { menus } from "@prisma/client";
import MenuItem from "./menuitem";

interface props {
  effect: "bottom" | "left" | "right";
  data: menus[];
}

export default function Sidebar({ effect, data }: props) {
  return (
    <div id="SideBar" className="relative flex-row">
      {data.map((item, index) => (
        <MenuItem key={index} to={item.path} title={item.title} effect={effect} />
      ))}
    </div>
  );
}
