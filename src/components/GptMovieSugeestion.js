import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptSearchView, getSearchTitle } = useSelector((store) => store.gpt);

  if (!gptSearchView) return null;
  return (
    <div className="relative bg-gradient-to-tr from-black to-gray-900 pt-4">
      <MovieList title={getSearchTitle} movies={gptSearchView} />
    </div>
  );
};

export default GptMovieSuggestion;
