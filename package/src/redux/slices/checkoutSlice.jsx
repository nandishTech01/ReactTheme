import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: {
    productName: 'Accurate HS10A Handheld Pulse Oximeter',
    subtotal: 15250,
    shipping: 100,
    total: 15350,
  },
  billingDetails: {},
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateBillingDetails(state, action) {
      state.billingDetails = action.payload;
    },
  },
});

export const { updateBillingDetails } = checkoutSlice.actions;

export default checkoutSlice.reducer;
