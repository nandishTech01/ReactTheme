import { configureStore } from '@reduxjs/toolkit';
import reactReducer from './slices/ReactSlice.jsx';

export const store = configureStore({
  reducer: {
    react: reactReducer,
  },
});
