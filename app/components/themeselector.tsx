import React, { useState, useContext } from "react";
import DynamicIcon from "~/components/dynamicicon";

export const ThemeSelector = ({ theme }: any) => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="relative m-3 h-fit w-fit rounded-full border border-theme-base bg-theme-muted p-1">
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          setOpenMenu(true);
        }}
        className="peer relative flex h-fit w-fit rounded-full hover:opacity-80"
      >
        <DynamicIcon icon="FiSlack" className="h-7 w-7" />
      </button>
      {openMenu && (
        <div
          className={`invisible absolute bottom-[40px] right-0 z-40 mx-2 h-fit max-h-[calc(100vh-74px)] w-fit -translate-x-full 
          flex-row overflow-auto rounded-md border border-theme-base bg-theme-muted px-1 text-center opacity-0 shadow-md transition-all 
          duration-500 hover:visible hover:translate-x-0 hover:opacity-100 peer-focus:visible peer-focus:translate-x-0 peer-focus:opacity-100`}
          aria-hidden={true}
        >
          <span className="text-sm font-semibold text-theme-strong">Theme Color</span>
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              theme("theme-sky");
            }}
            className="text-md my-1 flex w-24 cursor-pointer justify-center rounded-sm bg-cyan-600 p-1 hover:opacity-80"
          >
            Cyan
          </button>
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              theme("theme-amber");
            }}
            className="text-md my-1 flex w-24 cursor-pointer justify-center rounded-sm bg-amber-600 p-1 hover:opacity-80"
          >
            Amber
          </button>
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              theme("theme-indigo");
            }}
            className="text-md my-1 flex w-24 cursor-pointer justify-center rounded-sm bg-indigo-600 p-1 hover:opacity-80"
          >
            Indigo
          </button>
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              theme("theme-slate");
            }}
            className="text-md my-1 flex w-24 cursor-pointer justify-center rounded-sm bg-slate-600 p-1 hover:opacity-80"
          >
            Slate
          </button>
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              theme("theme-stone");
            }}
            className="text-md my-1 flex w-24 cursor-pointer justify-center rounded-sm bg-stone-600 p-1 hover:opacity-80"
          >
            Stone
          </button>
        </div>
      )}
    </div>
  );
};
