import type { menus } from "@prisma/client";
import React, { useEffect, useState } from "react";
import DynamicIcon from "~/components/dynamicicon";
import MenuItem from "./menuitem";
// import usePGMenus from "~/stores/usePGMenus";
// import { getMenusByGroup } from "~/models/menus.server";

interface props {
  data: menus[];
}

export const MenuIcon = ({ data }: props) => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="relative h-fit w-fit rounded-full border border-theme-base bg-theme-muted p-1">
      <button
        onClick={(evt) => {
          setOpenMenu(true);
        }}
        className="peer relative flex h-fit w-fit rounded-full hover:opacity-80"
      >
        <DynamicIcon icon="FiHome" className="h-7 w-7 p-1 font-semibold" />
      </button>
      {openMenu && (
        <div
          className="invisible absolute top-[40px] right-0 z-40 h-fit max-h-[calc(100vh-74px)] w-auto translate-x-full 
          flex-row overflow-auto rounded-[4px] border border-theme-base/80 bg-theme-muted/75 px-3 pt-2 pb-4 opacity-0 shadow-lg transition-all 
          duration-500 hover:visible hover:-translate-x-0 hover:opacity-100 peer-focus:visible peer-focus:-translate-x-0 peer-focus:opacity-100"
          aria-hidden={true}
        >
          <div className="row-auto grid gap-y-2">
            {data.map((item, index) => (
              <div key={index}>
                <MenuItem effect="bottom" title={item.title} to={item.path} icon={item.icon} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
