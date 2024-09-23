import React, { useRef } from "react";
import { LANG_KEY } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { openAi } from "../utils/openAI";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);

  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    const chatCompletion = await openAi.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion);
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
