import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: {},
  },
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;
