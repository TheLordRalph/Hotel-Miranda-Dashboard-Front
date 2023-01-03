import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {
        newUser: (state, action) => { 
        },
    },
});

export const { newUser } = usersSlice.actions;

export default usersSlice.reducer; 