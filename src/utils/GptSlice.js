import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movienames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movienames, movieResults } = action.payload;
      state.movienames = movienames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = GptSlice.actions;

export default GptSlice.reducer;
