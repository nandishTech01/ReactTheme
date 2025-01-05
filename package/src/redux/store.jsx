import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/CartSlice';
import ordersReducer from './slices/OrderSlice';
import productReducer from './slices/ProductSlice';
import userReducer from './slices/UserSlice';


export const store = configureStore({
  reducer: {
    products: productReducer,
    orders: ordersReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
