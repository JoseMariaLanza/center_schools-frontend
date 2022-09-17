import { createSlice } from "@reduxjs/toolkit";


// const userToken = JSON.parse(sessionStorage.getItem('session'));

// const initialState = userToken ?
//     userToken :
//     {
//         token: '',
//         isLoggedIn: false,
//         isLoading: false,
//         userData: null
//     };

const initialState = {
    token: '',
    isLoggedIn: false,
    isLoading: false,
    userData: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        getUserToken: (state, action) => {
            state.isLoading = false;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            // sessionStorage.setItem('session', JSON.stringify(state));
        },
        getUserProfile: (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
        },
        logout: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.token = '';
            state.userData = null;
            // state = initialState;
            // console.log(action);
        }
    }
})

export const {
    startLoading,
    getUserToken,
    getUserProfile,
    logout
} = authSlice.actions
