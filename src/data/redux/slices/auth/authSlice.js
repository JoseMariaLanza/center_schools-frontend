/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'unauthenticated',
  ok: null,
  message: null,
  data: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = 'loading';
    },
    setAuth: (state, action) => {
      state.status = 'authenticated';
      state.ok = action.payload.ok;
      state.message = action.payload.message;
      state.data = action.payload.data;
    },
    // getUserProfile: (state, action) => {
    //   state.data = action.payload.data;
    // },
    clear: (state) => {
      state.status = 'unauthenticated';
      state.ok = null;
      state.message = null;
      state.data = null;
    },
  },
});

export const { startLoading, setAuth, getUserProfile, clear } =
  authSlice.actions;
