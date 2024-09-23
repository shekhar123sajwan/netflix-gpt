import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie?.movie);
  const popularMovies = useSelector((store) => store.movie?.popularMovies);

  return (
    <div className="">
      <div className="-mt-20 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular Movies"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
