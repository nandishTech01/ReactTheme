import { createSlice } from '@reduxjs/toolkit';

const reactSlice = createSlice({
  name: 'react',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = reactSlice.actions;
export default reactSlice.reducer;
