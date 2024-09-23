import React from "react";
import { useSelector } from "react-redux";
import { useFetchTrailerVideo } from "../hooks/useFetchTrailerVideo";

const VideoBackgroud = ({ movieId }) => {
  useFetchTrailerVideo({ movieId });
  const videoTrailer = useSelector((store) => store.movie.videoTrailer);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoTrailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackgroud;
