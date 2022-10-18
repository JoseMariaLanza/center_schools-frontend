/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const dashboardInitialState = {
  isLoading: false,
  userPosts: null,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: dashboardInitialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setDashboardData: (state, action) => {
      state.userPosts = action.payload.data;
    },
  },
});

export const { startLoading, setDashboardData } = dashboardSlice.actions;
