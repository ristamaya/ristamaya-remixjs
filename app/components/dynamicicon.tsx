import { FC } from "react";
import * as fiIcons from "react-icons/fi";

const DynamicIcon: FC<{ icon: string; className: string }> = (props) => {
  const { ...icons } = fiIcons;
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
