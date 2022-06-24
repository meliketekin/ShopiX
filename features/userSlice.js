import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user:  null,
        err: '',
        loading: false
    },
    
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    },
    // extraReducers: {
    //     [fetchUserData.fulfilled]: (state, action) => {
    //         state.user = action.payload;
    //     },
    //     [fetchUserData.rejected]: (state, action) => {
    //         state.user = null;
    //     },
    //     [fetchUserData.pending]: (state, action) => {
    //         state.loading = true;
    //     }
    
    // }
});
export const { login, logout } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;