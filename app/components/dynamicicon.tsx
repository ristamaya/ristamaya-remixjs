import { FC, useState } from "react";
import * as fiIcons from "react-icons/fi";
import * as mdIcons from "react-icons/md";

const DynamicIcon: FC<{ icon: string; className: string }> = (props) => {
  const { ...icons } = props.icon.substring(2, 0) == "Fi" ? fiIcons : mdIcons;

  // @ts-ignore
  const TheIcon: JSX.Element = icons[props.icon];

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon className={props.className} />
    </>
  );
};

export default DynamicIcon;
