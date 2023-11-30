import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
  filteredProducts: [],
  allCategories: [],
  // singleProduct: [],
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
        state.filteredProducts = [...state.allProducts];
      } else {
        state.filteredProducts = state.filteredProducts.filter((i) =>
          i.title.toLowerCase().includes(payload.toLowerCase())
        );
      }
    },
    filterProducts: (state, { payload: { name, value, checked } }) => {
      if (value === '' || !checked) {
        state.filteredProducts = [...state.allProducts];
      } else if (name === 'CATEGORIES') {
        state.filteredProducts = state.filteredProducts.filter((i) =>
          i.category.includes(value)
        );
      } else if (name === 'PRICE RANGE') {
        if (value === 'Under 200') {
          state.filteredProducts = state.filteredProducts.filter(
            (i) => i.price < 200
          );
        } else {
          state.filteredProducts = state.filteredProducts.filter(
            (i) => i.price > 200
          );
        }
      } else {
        state.filteredProducts = state.filteredProducts.filter((i) => {
          return Math.floor(i.rating.rate) === Number(value);
        });
      }
    },
    // fetchSingleProduct: (state, { payload }) => {
    //   const productId = Number(payload);
    //   const filteredProducts = state.filteredProducts.filter(
    //     (i) => i.id === productId
    //   );
    //   state.singleProduct = [...filteredProducts];
    // },
  },
});

export const {
  storeAllProducts,
  searchProduct,
  storeAllCategories,
  filterProducts,
  // fetchSingleProduct,
} = searchResultSlice.actions;
export default searchResultSlice.reducer;
