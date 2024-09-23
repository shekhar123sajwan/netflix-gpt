export const PHOTO_URL = "https://avatars.githubusercontent.com/u/34606343?v=4";
export const LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const MOVIE_IMG_URL = "https://image.tmdb.org/t/p/w500/";
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
