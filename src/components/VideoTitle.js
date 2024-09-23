import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-tr from-black to-transparent">
      <h1 className="text-2xl font-bold"> {title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 font-bold rounded px-14 text-sm  hover:opacity-80">
          Play
        </button>
        <button className="bg-gray-500 mx-2 text-white p-2 font-bold rounded px-14 text-sm">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
