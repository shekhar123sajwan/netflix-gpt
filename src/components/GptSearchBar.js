import React, { useRef } from "react";
import { LANG_KEY } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { openAi } from "../utils/openAI";
import { API_OPTION } from "../utils/constants";
import { setGptSearchView } from "../utils/gptSlice";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    // const chatCompletion = await openAi.chat.completions.create({
    //   messages: [{ role: "user", content:  searchText.current.value }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(chatCompletion);
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      searchText.current.value +
      "&include_adult=false&language=en-US&page=1";
    const response = await fetch(url, API_OPTION);
    const data = await response.json();
    dispatch(
      setGptSearchView({
        result: data?.results,
        searchText: searchText.current.value,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black p-2 grid grid-cols-12 z-20"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 border border-gray-200 col-span-9"
          required
          placeholder={LANG_KEY?.[lang].searchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 px-2 m-4 bg-red-500 text-white rounded-sm"
        >
          {LANG_KEY?.[lang].searchButton}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
