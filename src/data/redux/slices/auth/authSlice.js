import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(sessionStorage.getItem('session')) ?
    JSON.parse(sessionStorage.getItem('session')) :
    {
        token: '',
        isLoggedIn: false,
        isLoading: false,
    };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        setUserToken: (state, action) => {
            state.isLoading = false;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            sessionStorage.setItem('session', JSON.stringify(state));
        },
        setUserProfile: (state, action) => {
            // state.userData = localStorage.setItem('userData', action.payload)
            // {
            //     auth: state.token,
            //     user: 1,
            //     birth_date: null,
            //     blood_type: null,
            //     first_name: null,
            //     id: 1,
            //     last_name: null,
            //     observation: null,
            //     status: "Guest",
            // })
        },
        getUserProfile: (state, action) => {
            state.userData = action.payload;
        },
        logout: (state, action) => {
            console.log(action);
        }
    }
})

export const { startLoading, setUserToken, getUserProfile, logout } = authSlice.actions
