import { Link } from "@remix-run/react";
import { iMovie } from "~/models/movies.server";
import DynamicIcon from "./dynamicicon";
import MenuItem from "./menuitem";

type MovieBannerProps = {
  backdrop_path: iMovie["backdrop_path"];
  title: iMovie["backdrop_path"];
};

export default function MovieBanner({ backdrop_path, title }: MovieBannerProps) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="relative flex">
      <img src={imgPath + backdrop_path} className="-z-50 w-screen object-cover" />
      <div className="absolute top-0 rounded-br-md bg-theme-fill/40 p-2 text-lg font-semibold text-theme-inverted bg-blend-darken">
        <MenuItem title="Back" to="/playground/movies" effect="bottom" icon="FiChevronsLeft" />
      </div>
      <div className="absolute bottom-3 bg-theme-fill/75 p-3 text-lg font-bold text-theme-inverted bg-blend-darken sm:text-3xl">
        {title}
      </div>
    </div>
  );
}
