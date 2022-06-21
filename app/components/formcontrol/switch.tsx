import { useState } from "react";

interface props {
  trueValue: string | undefined;
  falseValue: string | undefined;
  value: string;
  name: string;
  enable: boolean | true;
}

export default function Switch({ trueValue, falseValue, value, name, enable }: props) {
  let toggleDefault = true;

  if (value !== trueValue) {
    toggleDefault = false;
  }

  const [toggle, setToggle] = useState(toggleDefault);

  return (
    <div
      onClick={(e) => {
        enable && setToggle(!toggle);
      }}
      className={`${
        toggle ? "border-theme-base bg-theme-sw-on/50" : "border-theme-base bg-theme-sw-off"
      }
      flex h-[10px] w-7 cursor-pointer items-center rounded-full border transition-all duration-150`}
    >
      <button
        name={name}
        value={toggle ? trueValue : falseValue}
        className={`${
          toggle
            ? "translate-x-3/4 border-theme-base bg-theme-sw-on"
            : "-translate-x-[2px] border-theme-base bg-theme-sw-off"
        } bg-theme-base h-4 w-4 rounded-full border shadow-sm transition-all duration-150`}
      ></button>
    </div>
  );
}
