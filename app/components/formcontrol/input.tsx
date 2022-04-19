import React, { InputHTMLAttributes, useState } from "react";
import DynamicIcon from "~/components/dynamicicon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: {};
  label: string;
  className: string;
  inputData?: string[];
  errorMessage?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, inputData, errorMessage, ...props }, ref) => {
    const [openData, setOpenData] = useState(false);
    const [value, setValue] = useState("");

    return (
      <div className="relative m-3 flex h-fit w-fit items-center justify-center">
        <input
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={ref}
          className={`min-w-10 min-h-8 peer relative z-0 my-1 rounded-[4px] border bg-transparent px-1 pt-1 pb-1 text-theme-base outline-none placeholder:text-theme-muted invalid:border-theme-warning disabled:border-theme-base/50 
          ${className} 
          ${errorMessage ? "border-theme-warning" : "border-theme-base"}`}
        ></input>

        <span
          className={`absolute -top-[5px] left-2 z-10 rounded-sm bg-theme-muted px-[2px] text-sm leading-none text-theme-base peer-invalid:text-theme-warning peer-disabled:text-theme-muted 
          ${errorMessage ? "text-theme-warning" : "text-theme-base"}`}
        >
          {label}
        </span>

        {errorMessage && (
          <span className="absolute -top-[5px] right-1 z-10 w-fit rounded-full bg-theme-muted px-[2px] text-sm leading-none text-theme-warning">
            {errorMessage}
          </span>
        )}

        {inputData && (
          <span
            onClick={(e) => setOpenData(!openData)}
            className={`absolute right-1 h-fit w-fit cursor-pointer border-l border-theme-base bg-theme-muted text-theme-base`}
            aria-hidden={true}
          >
            <DynamicIcon
              icon="FiChevronLeft"
              className={`${openData && "-rotate-90"} h-6 w-6  transition duration-300`}
            />
          </span>
        )}

        {openData && (
          <div
            className={`absolute bottom-[10px] left-0 z-20 w-full translate-y-full flex-row rounded-[4px] border-l border-r border-b border-theme-base bg-theme-muted px-1 py-1 text-left`}
            aria-hidden={true}
          >
            {inputData?.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer pl-1 text-theme-base hover:bg-theme-fill/75"
                onClick={(e) => {
                  setValue(item);
                  setOpenData(!openData);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);
