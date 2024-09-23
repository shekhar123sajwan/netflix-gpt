import React from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";

const MovieList = ({ title, movies }) => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="my-4 mx-3">
        <h1 className="text-slate-600 font-bold text-3xl">{title}</h1>
      </div>
      <div className="my-8 mx-5 ">
        <div className="px-4 ">
          <div className="slider-container">
            <Slider {...settings}>
              {movies?.length > 0 &&
                movies?.map((movie) => {
                  return <MovieCard key={movie.id} movie={movie} />;
                })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
