import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  singleProduct: '',
  inputFocus: false,
};

const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    showSuggestionBox: (state) => {
      state.inputFocus = true;
    },
    hideSuggestionBox: (state) => {
      state.inputFocus = false;
    },
    searchTextChange: (state, { payload: { value } }) => {
      state.search = value;
    },
  },
});

export const { showSuggestionBox, hideSuggestionBox, searchTextChange } =
  homepageSlice.actions;
export default homepageSlice.reducer;
