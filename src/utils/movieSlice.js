import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: {},
    videoTrailer: null,
  },
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setVideoTrailer: (state, action) => {
      state.videoTrailer = action.payload;
    },
  },
});

export const { setMovie, setVideoTrailer } = movieSlice.actions;
export default movieSlice.reducer;
