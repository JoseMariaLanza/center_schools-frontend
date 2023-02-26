/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import decodeToken from '../../../../domain/services/decodeToken';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    email: null,
    displayName: null,
    message: null,
    token: null,
    roles: null,
    permissions: null,
  },

  reducers: {
    retrieveUserData: (state, { payload }) => {
      console.log('PAYLOAD IN RETRIEVE USER DATA: ', payload);
      state.authToken = payload.token;
      state.uid = payload.id;
      state.userAccountpayload = payload.user;
      state.firstName = payload.first_name;
      state.lastName = payload.last_name;
      state.birthDate = payload.birth_date;
      state.bloodType = payload.blood_type;
      state.observation = payload.observation;
      state.userStatus = payload.status;
    },
    noUserData: (state, { payload }) => {
      state.message = 'No user data';
      state.error = payload;
    },
  },
});

export const { retrieveUserData, noUserData } = userSlice.actions;
