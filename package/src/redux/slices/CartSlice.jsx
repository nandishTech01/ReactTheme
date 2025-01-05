import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    cartCount: 0,
    loading: false,
    error: null,
  },
  reducers: {
    fetchCartStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCartSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.cartCount = action.payload.reduce((count, item) => count + item.quantity, 0);
    },
    fetchCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addItemStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addItemSuccess: (state, action) => {
      state.loading = false;
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.cartCount += 1;
    },
    addItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateCartItemStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateCartItemSuccess: (state, action) => {
      state.loading = false;
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.cartCount += action.payload.quantity - existingItem.quantity;
        existingItem.quantity = action.payload.quantity;
      }
    },
    updateCartItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeItemStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    removeItemSuccess: (state, action) => {
      state.loading = false;
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove) {
        state.cartCount -= itemToRemove.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    removeItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearCartStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    clearCartSuccess: (state) => {
      state.loading = false;
      state.items = [];
      state.cartCount = 0;
    },
    clearCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCartStart,
  fetchCartSuccess,
  fetchCartFailure,
  addItemStart,
  addItemSuccess,
  addItemFailure,
  updateCartItemStart,
  updateCartItemSuccess,
  updateCartItemFailure,
  removeItemStart,
  removeItemSuccess,
  removeItemFailure,
  clearCartStart,
  clearCartSuccess,
  clearCartFailure,
} = CartSlice.actions;

export default CartSlice.reducer;