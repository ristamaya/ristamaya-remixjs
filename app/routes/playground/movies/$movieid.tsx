import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import MovieBanner from "~/components/moviebanner";
import CastList from "~/components/moviecast";
import { getMovieById, iMovie } from "~/models/movies.server";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.movieid, "expected params.movieid");
  const movie = await getMovieById(params.movieid);

  return movie;
};

// export const action: ActionFunction = async ({ request, params }) => {
//   invariant(params.movieid, "expected params.movieid");

//   return redirect(`/films/${params.movieid}`);
// };

export default function Movie() {
  const movie = useLoaderData<iMovie>();

  return (
    <div>
      <MovieBanner backdrop_path={movie.backdrop_path} title={movie.title} />

      <div className="p-10">
        <p>{movie.homepage}</p>

        <div className="flex space-x-5 py-5">
          {/* <CastList characters={movieCast.character} /> */}

          <div className="flex flex-1 flex-col justify-between">
            <Outlet />

            {/* <CommentsList filmId={film.id} comments={film.comments || []} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
