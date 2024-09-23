import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-2xl font-bold"> {title}</h1>
      <p className="py-6 text-lg">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-white p-2 font-bold rounded px-14 text-sm">
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
