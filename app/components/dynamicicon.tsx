import * as fiIcons from "react-icons/fi";
import * as mdIcons from "react-icons/md";

interface props {
  icon: string;
  className: string;
}

export default function DynamicIcon({ icon, className }: props) {
  const { ...icons } = icon.substring(2, 0) == "Fi" ? fiIcons : mdIcons;

  // @ts-ignore
  const TheIcon: JSX.Element = icons[icon];

  // @ts-ignore
  return <TheIcon className={className} />;
}
