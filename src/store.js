import { configureStore } from '@reduxjs/toolkit';
import homepageSlice from './slice/Homepage/Homepage';
import searchResult from './slice/SearchResult/SearchResult';
export const store = configureStore({
  reducer: {
    homepage: homepageSlice,
    searchResult: searchResult,
  },
});
