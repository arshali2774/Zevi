import { configureStore } from '@reduxjs/toolkit';
import homepageSlice from './slice/Homepage/Homepage';
export const store = configureStore({
  reducer: {
    homepage: homepageSlice,
  },
});
