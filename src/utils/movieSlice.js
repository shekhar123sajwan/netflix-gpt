import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: {},
    videoTrailer: null,
    popularMovies: null,
  },
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setVideoTrailer: (state, action) => {
      state.videoTrailer = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const { setMovie, setVideoTrailer, setPopularMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
