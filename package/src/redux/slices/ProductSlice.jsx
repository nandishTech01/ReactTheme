import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchProductByIdStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductByIdSuccess: (state, action) => {
      state.loading = false;
      state.products = state.products.map(product =>
        product.id === action.payload.id ? action.payload : product
      );
    },
    fetchProductByIdFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductByIdStart,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
} = ProductSlice.actions;

export default ProductSlice.reducer;