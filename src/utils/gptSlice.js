import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptSearchView: null,
    getSearchTitle: "",
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },

    setGptSearchView: (state, action) => {
      const { result, searchText } = action.payload;
      state.gptSearchView = result;
      state.getSearchTitle = searchText;
    },
  },
});

export const { toggleGptSearchView, setGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
