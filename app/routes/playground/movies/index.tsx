import { Link, useLoaderData } from "@remix-run/react";
import MovieCard from "~/components/moviecard";
import { MovieKeyword } from "~/models/movies.server";
import { getMovieByKeyword } from "~/models/movies.server";
import useStore from "~/stores/useMovieKeyword";

export async function loader() {
  const movies = getMovieByKeyword("180547");
  return movies;
}

export default function MoviesIndex() {
  const keyword = useStore((state) => state.keyword);
  const moviesData = useLoaderData<MovieKeyword[]>();

  // console.log(moviesData);
  return (
    <>
      <div className="inline-grid w-full grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {moviesData.map((item) => (
          <Link
            key={item.id}
            title={item.title}
            to={item.id.toString()}
            className="group relative m-1 flex h-fit w-fit cursor-pointer overflow-hidden rounded-[4px]"
          >
            <MovieCard Movie={item} />
          </Link>
        ))}
      </div>
    </>
  );
}
