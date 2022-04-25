import React from "react";

export interface Movies {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface props {
  data: Movies;
}
export default function MovieCard({ data }: props) {
  const imgPath = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="group relative m-1 flex h-fit w-fit cursor-pointer overflow-hidden rounded-sm">
      <img
        src={imgPath + data.poster_path}
        className="h-fit object-scale-down transition-all duration-500 group-hover:scale-105"
      />
      <div className="invisible absolute flex w-full -translate-y-full bg-theme-muted/70 p-1 text-theme-base transition-all duration-500 lg:group-hover:visible lg:group-hover:translate-y-0">
        {data.overview}
      </div>
      <h1 className="absolute bottom-0 w-full items-center bg-theme-fill/30 py-1 px-1 text-center text-lg font-semibold leading-none text-theme-inverted bg-blend-darken">
        {data.title}
      </h1>
    </div>
  );
}
