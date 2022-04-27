import { iMovieKeyword } from "~/models/movies.server";

export default function MovieCard({ Movie }: iMovieKeyword) {
  const imgPath = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <img
        src={imgPath + Movie.poster_path}
        className="h-fit object-scale-down transition-all duration-500 group-hover:scale-105"
      />
      <div className="absolute top-0 right-0 rounded-[4px] bg-theme-fill/80 p-2 text-center">
        <h1 className="text-sm font-black text-theme-muted underline">{Movie.vote_average}</h1>
        <h1 className="text-xs text-theme-muted">
          {Movie.vote_count.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </h1>
      </div>

      <div className="absolute bottom-0 w-full items-center bg-theme-fill/30 py-1 px-1 text-center bg-blend-darken">
        <p className="invisible absolute left-0 flex w-full translate-y-0 bg-theme-muted/70 p-1 text-sm text-theme-base transition-all duration-500 lg:group-hover:visible lg:group-hover:-translate-y-full">
          {Movie.overview}
        </p>
        <h1 className="z-50 text-lg font-semibold leading-none text-theme-inverted">{Movie.title}</h1>
      </div>
    </>
  );
}
