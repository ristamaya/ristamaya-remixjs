import { LoaderFunction } from "@remix-run/node";
import { Form, Link, useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import DynamicIcon from "~/components/dynamicicon";
import { Input } from "~/components/formcontrol/input";
import MovieCard from "~/components/moviecard";
import { MovieKeyword } from "~/models/movies.server";
import { getMovieByKeyword } from "~/models/movies.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  const page = url.searchParams.get("page");
  const movies = getMovieByKeyword("180547", page, title);

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
      <div className="relative flex w-full justify-center text-center">
        <h1 className="mt-2 mb-5 text-xl font-semibold text-theme-strong md:text-3xl">
          Marvel Cinematic Universe
        </h1>
        <div className="absolute -top-2 right-1 w-auto">
          <Form reloadDocument method="get">
            <div className="relative flex items-center">
              <Input
                className="my-4 w-32 rounded-md md:w-56"
                label=""
                placeholder="Search"
                name="title"
              />
              <button className="absolute right-2 z-10" type="submit">
                <DynamicIcon icon="MdSearch" className="h-6 w-6 text-theme-base" />
              </button>
            </div>
          </Form>
        </div>
      </div>

      <div className="mx-auto inline-flex flex-wrap justify-center bg-theme-muted px-3">
        {movies.map((item, index) => (
          <Link
            key={index}
            title={item.title}
            to={item.id.toString()}
            className="group relative m-1 flex h-fit w-fit cursor-pointer overflow-hidden rounded-[4px]"
          >
            <MovieCard Movie={item} />
          </Link>
        ))}

        {/* <Button label="Load More" className="h-10 w-14" onClick={ClickHandler} hidden={hideLoadMore} /> */}
      </div>
    </>
  );
}
