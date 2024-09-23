import React from "react";
import { LANG_KEY } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black p-2 grid grid-cols-12 z-20">
        <input
          type="text"
          className="p-4 m-4 border border-gray-200 col-span-9"
          placeholder={LANG_KEY?.[lang].searchPlaceholder}
        />
        <button className="col-span-3 px-2 m-4 bg-red-500 text-white rounded-sm">
          {LANG_KEY?.[lang].searchButton}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
