import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { setMovie } from "../utils/movieSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

    const movieList = await fetch(url, API_OPTION);

    const { results } = await movieList.json();

    dispatch(setMovie(results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
