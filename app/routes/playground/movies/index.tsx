import { useLoaderData } from "@remix-run/react";
import WorkOnIt from "~/components/workonit";
import MovieCard, { Movies } from "~/components/moviecard";

export async function loader() {
  const res = await fetch("https://api.themoviedb.org/3/keyword/180547/movies?api_key=8a6e0734cef4f20fdd614432c5f2d622");
  const movies = await res.json();
  return movies.results;
}

export default function MoviesIndex() {
  const moviesData: Movies[] = useLoaderData();

  return (
    <div className="inline-grid w-full grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {moviesData.map((item, index) => (
        <MovieCard key={index} data={item} />
      ))}
    </div>
  );
}
