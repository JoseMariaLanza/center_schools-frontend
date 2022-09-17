import { createSlice } from "@reduxjs/toolkit";


// const userToken = JSON.parse(sessionStorage.getItem('session'));

// const postsInitialState = userToken ? userToken : {
//     isLoading: false,
//     data: null,
// };

const postsInitialState = {
    isLoading: false,
    data: null,
};

export const postSlice = createSlice({
    name: 'post',
    initialState: postsInitialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        getAllPosts: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data
        },
        setUserPosts: (state, action) => {
            state.isLoading = false;
            state.userPosts = action.payload.data;
        }
    }
})

export const {
    startLoading,
    setUserPosts
} = postSlice.actions;