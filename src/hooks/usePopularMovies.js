import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { setPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getMoviesPopular = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
      API_OPTION
    );
    const data = await response.json();
    dispatch(setPopularMovies(data?.results));
  };

  useEffect(() => {
    getMoviesPopular();
  }, []);
};
