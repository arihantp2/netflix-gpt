import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 pl-12">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList
          title={"Upcoming movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
