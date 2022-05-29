import { json, LoaderFunction } from "@remix-run/node";
import { Form, Link, useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import DynamicIcon from "~/components/dynamicicon";
import { Button } from "~/components/formcontrol/button";
import { Input } from "~/components/formcontrol/input";
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
      {/* <div className="fixed -z-10 flex h-10 w-screen items-center justify-between overflow-hidden bg-theme-fill px-1">
        <div className="ml-[145px] text-lg font-semibold text-theme-base">Movies</div> */}
      {/* </div> */}

      <div className="relative flex h-36 w-full justify-center text-center">
        <h1 className="my-2 text-xl font-semibold text-theme-strong md:text-3xl">Marvel Cinematic Universe</h1>
        <div className="absolute -top-2 right-1 w-auto">
          <Form method="get">
            <div className="relative flex items-center">
              <Input className="w-32 md:w-56" label="" placeholder="Search" name="title" />
              <button className="absolute right-5 z-10" type="submit">
                <DynamicIcon icon="MdSearch" className="h-6 w-6 text-theme-base" />
              </button>
            </div>
          </Form>
        </div>
      </div>

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
