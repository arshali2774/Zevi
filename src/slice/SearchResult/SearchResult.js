import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
  filteredProducts: [],
  allCategories: [],
};

const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    storeAllProducts: (state, { payload }) => {
      state.allProducts = payload;
      state.filteredProducts = payload;
    },
    storeAllCategories: (state, { payload }) => {
      state.allCategories = payload;
    },
    searchProduct: (state, { payload }) => {
      console.log(payload);
      if (payload === '') {
        state.filteredProducts = state.allProducts;
      } else {
        state.filteredProducts = state.filteredProducts.filter((i) =>
          i.title.toLowerCase().includes(payload.toLowerCase())
        );
      }
    },
  },
});

export const { storeAllProducts, searchProduct, storeAllCategories } =
  searchResultSlice.actions;
export default searchResultSlice.reducer;
