import React, { useEffect, useState } from "react";
import Header from "./Header";
import { API_OPTION } from "../utils/constants";

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const getNowPlayingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

    const movieList = await fetch(url, API_OPTION);

    const { results } = await movieList.json();
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return <Header />;
};

export default Browse;
