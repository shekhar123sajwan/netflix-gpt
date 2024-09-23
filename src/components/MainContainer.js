import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackgroud from "./VideoBackgroud";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.movie);
  if (!movies) return null;

  const mainMovie = movies?.[0];

  return (
    <div>
      <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} />
      <VideoBackgroud movieId={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;
