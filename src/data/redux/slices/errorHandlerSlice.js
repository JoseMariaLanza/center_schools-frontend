/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ok: null,
  statusCode: null,
  message: null,
};

export const errorHandlerSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    handleError: (state, action) => {
      state.ok = action.payload.ok;
      state.statusCode = action.status;
      state.error = action.payload.error;
    },
  },
});

export const { handleError } = errorHandlerSlice.actions;
