import { json, LoaderFunction } from "@remix-run/node";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Button } from "~/components/formcontrol/button";
import MovieCard from "~/components/moviecard";
import { getMenusByGroup } from "~/models/menus.server";
import { MovieKeyword } from "~/models/movies.server";
import { getMovieByKeyword } from "~/models/movies.server";

const getPage = (searchParams: URLSearchParams) => Number(searchParams.get("page") || "1");

export const loader: LoaderFunction = async ({ request }) => {
  const page = getPage(new URL(request.url).searchParams);
  const movies = getMovieByKeyword("180547", page);

  if (!movies) {
    return "no movie data";
  }

  return movies;
};

export default function MoviesIndex() {
  const initialMovies = useLoaderData<MovieKeyword[]>();
  const [movies, setMovies] = useState<MovieKeyword[]>(initialMovies);
  const fetcher = useFetcher();
  const [hideLoadMore, setHideLoadMore] = useState(false);
  const [page, setPage] = useState(2);

  useEffect(() => {
    if (fetcher.data && fetcher.data.length === 0) {
      setHideLoadMore(true);
      return;
    }

    // Movies contain data, merge them and allow the possiblity of another fetch
    if (fetcher.data && fetcher.data.length > 0) {
      setMovies((prevMovies: MovieKeyword[]) => [...prevMovies, ...fetcher.data]);

      setPage((page: number) => page + 1);
      setHideLoadMore(false);
    }
  }, [fetcher.data]);

  if (!movies) {
    <div>No Movies data</div>;
    return;
  }

  const ClickHandler = async () => {
    fetcher.load(`/playground/movies?index&page=${page}`);
    setHideLoadMore(true);
  };

  return (
    <>
      <div className="relative flex h-64 w-full justify-center text-center">Marvel Cinematic Universe</div>

      <div className="mx-auto inline-flex flex-wrap justify-center bg-theme-muted px-3">
        {movies.map((item) => (
          <Link
            key={item.id}
            title={item.title}
            to={item.id.toString()}
            className="group relative m-1 flex h-fit w-fit cursor-pointer overflow-hidden rounded-[4px]"
          >
            <MovieCard Movie={item} />
          </Link>
        ))}

        <Button label="Load More" className="h-10 w-14" onClick={ClickHandler} hidden={hideLoadMore} />
      </div>
    </>
  );
}
