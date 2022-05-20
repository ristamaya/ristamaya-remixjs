import { Link } from "@remix-run/react";
import { iMovie } from "~/models/movies.server";

type MovieBannerProps = {
  backdrop_path: iMovie["backdrop_path"];
  title: iMovie["backdrop_path"];
};

export default function MovieBanner({ backdrop_path, title }: MovieBannerProps) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <div className="relative h-[36rem] w-full overflow-hidden">
        <img src={imgPath + backdrop_path} className="absolute -z-50 h-full w-full object-cover" />
        <div className="absolute flex h-full w-full flex-col items-start justify-between">
          <div className="bg-theme-fill/40 p-5 bg-blend-darken">
            <h1 className="text-3xl font-bold text-theme-inverted">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
