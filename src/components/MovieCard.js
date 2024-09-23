import React from "react";
import { MOVIE_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-52 m-3 border border-red-400">
      <Link to={`/movie/${movie.id}`} className="">
        <img src={`${MOVIE_IMG_URL}${movie.poster_path}`} />
      </Link>
    </div>
  );
};

export default MovieCard;
