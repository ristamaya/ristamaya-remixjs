import React, { ForwardRefRenderFunction, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className: string;
}

export const Button: ForwardRefRenderFunction<HTMLInputElement, ButtonProps> = ({
  label,
  className,
  ...props
}) => {
  const spanClass =
    "absolute top-0 h-full w-0 bg-theme-btn-hover/20 group-hover:w-full transition-all ease-out duration-700";

  return (
    <button
      {...props}
      className={`group relative m-2 min-h-fit min-w-fit items-center justify-center overflow-hidden rounded-md bg-theme-btn-base px-4 py-1 text-theme-base outline-none active:text-theme-inverted ${className}`}
    >
      {label}
      <span className={`left-0 ${spanClass}`}></span>
      <span className={`right-0 ${spanClass}`}></span>
    </button>
  );
};
