import { createSlice } from '@reduxjs/toolkit';

const OrderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {
    placeOrderStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    placeOrderSuccess: (state, action) => {
      state.loading = false;
      state.orders.push(action.payload);
    },
    placeOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchOrdersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrdersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  placeOrderStart,
  placeOrderSuccess,
  placeOrderFailure,
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
} = OrderSlice.actions;

export default OrderSlice.reducer;