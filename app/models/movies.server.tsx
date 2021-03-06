import { useState } from "react";

export type MovieKeyword = {
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
};

export interface iMovieKeyword {
  Movie: MovieKeyword;
}

export interface Cast {
  adult: boolean;
  gender: string;
  id: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: string;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew {
  adult: boolean;
  gender: string;
  id: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface iMovieCredit {
  id: string;
  cast: Cast[];
  crew: Crew[];
}

interface btc {
  id: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
interface genre {
  id: string;
  name: string;
}

interface pc {
  id: string;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface pcon {
  iso_3166_1: string;
  name: string;
}

interface sl {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface iMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: btc;
  budget: number;
  genre: genre[];
  homepage: string;
  id: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: pc[];
  production_countries: pcon[];
  release_date: Date;
  revenue: string;
  runtime: string;
  spoken_languages: sl[];
  status: string;
  tagline: string;
  title: string;
  video: string;
  vote_average: number;
  vote_count: number;
}

const ApiKey = "8a6e0734cef4f20fdd614432c5f2d622";

export async function getMovieByKeyword(keyword: string, page?: string | null, title?: string | null) {
  let moviesMCU: MovieKeyword[] = [];

  try {
    const page1 = await fetch(`https://api.themoviedb.org/3/keyword/${keyword}/movies?page=1&api_key=${ApiKey}`).then(
      (response) => response.json()
    );

    moviesMCU = page1.results;
    const page2 = await fetch(`https://api.themoviedb.org/3/keyword/${keyword}/movies?page=2&api_key=${ApiKey}`).then(
      (response) => response.json()
    );
    moviesMCU = [...moviesMCU, ...page2.results];

    const page3 = await fetch(`https://api.themoviedb.org/3/keyword/${keyword}/movies?page=3&api_key=${ApiKey}`).then(
      (response) => response.json()
    );
    moviesMCU = [...moviesMCU, ...page3.results];
  } catch (error) {
    return error;
  }

  return moviesMCU.filter((film) => (title ? film.title.toLowerCase().includes(title.toLowerCase()) : true));
}

export async function getMovieById(MoviesId: string) {
  const resMovie = await fetch(`https://api.themoviedb.org/3/movie/${MoviesId}?api_key=${ApiKey}`);
  const Movie = await resMovie.json();

  // const resCredit = await fetch(`https://api.themoviedb.org/3/movie/${MoviesId}/credits?api_key=${ApiKey}`);
  // const MovieCredit = await resCredit.json();

  return Movie;

  // const comments = await getComments(MoviesId);

  // const characters = await Promise.all(
  //   Movies.people
  //     .filter((url) => url !== 'https://ghibliapi.herokuapp.com/people/')
  //     .map((url) => fetch(url).then((res) => res.json()))
  // );

  // return { ...Movies, characters, comments };
}
