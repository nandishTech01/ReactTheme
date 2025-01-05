import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    registerUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    registerUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loginUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchUserProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
  fetchUserProfileStart,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
} = UserSlice.actions;

export default UserSlice.reducer;