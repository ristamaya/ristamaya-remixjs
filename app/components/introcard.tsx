import React from "react";
import DynamicIcon from "./dynamicicon";

interface props {
  icon: string;
  title: string;
  content: string;
}

export default function IntroCard({ icon, title, content }: props) {
  return (
    <div className="flex w-full cursor-pointer items-center justify-around rounded-md border border-theme-base bg-theme-muted p-4 shadow-md hover:shadow-xl">
      <DynamicIcon icon={icon} className="h-10 w-10" />
      <div className="block ">
        <h1 className="text-lg font-semibold text-theme-strong">{title}</h1>
        <p className="text-base text-theme-base">{content}</p>
      </div>
    </div>
  );
}
