import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { setVideoTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

export const useFetchTrailerVideo = ({ movieId }) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTION
    );
    const data = await response.json();

    const trailers = data?.results?.filter(
      (video) => video?.type === "Trailer"
    );

    const trailer = trailers?.length !== 0 ? trailers?.[0] : data.results?.[0];

    dispatch(setVideoTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
