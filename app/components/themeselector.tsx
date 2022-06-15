import { Form, useFetcher } from "@remix-run/react";
import { useState } from "react";
import DynamicIcon from "~/components/dynamicicon";

export const themeList = [
  { title: "Theme 1", value: "theme-cyan", bg: "bg-cyan-600" },
  { title: "Theme 2", value: "theme-amber", bg: "bg-amber-600" },
  { title: "Theme 3", value: "theme-indigo", bg: "bg-indigo-600" },
  { title: "Theme 4", value: "theme-slate", bg: "bg-slate-600" },
  { title: "Theme 5", value: "theme-stone", bg: "bg-stone-600" },
];

export const ThemeSelector = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const fetchTheme = useFetcher();

  const clickhandler = (value: string) => {
    fetchTheme.submit({ theme: value });
  };

  return (
    <div className="relative m-3 h-fit w-fit rounded-full border border-theme-base bg-theme-muted p-1">
      <button
        onClick={(e) => {
          setOpenMenu(true);
        }}
        className="peer relative flex h-fit w-fit cursor-pointer rounded-full hover:opacity-80"
      >
        <DynamicIcon icon="FiSun" className="h-7 w-7" />
      </button>
      {openMenu && (
        <div
          className={`invisible absolute bottom-[40px] right-0 z-40 mx-2 h-fit max-h-[calc(100vh-74px)] w-fit -translate-x-full
          flex-row overflow-auto rounded-md border border-theme-base bg-theme-muted px-1 text-center opacity-0 shadow-md transition-all duration-500 
          hover:visible hover:translate-x-0 hover:opacity-100 peer-focus:visible peer-focus:translate-x-0 peer-focus:opacity-100`}
          aria-hidden={true}
        >
          <fetchTheme.Form method="post">
            <span className="text-sm font-semibold text-theme-strong">Theme Color</span>
            <div>
              {themeList.map((item, index) => (
                <button
                  key={index}
                  type="submit"
                  name="theme"
                  value={item.value}
                  onClick={(e) => {
                    clickhandler(item.value);
                  }}
                  className={`${item.bg} text-md my-1 flex w-24 cursor-pointer justify-center rounded-sm p-1 hover:opacity-80`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </fetchTheme.Form>
        </div>
      )}
    </div>
  );
};
