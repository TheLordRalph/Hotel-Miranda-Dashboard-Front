import { createSlice } from "@reduxjs/toolkit";

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {},
    reducers: {
        newRoom: (state, action) => { 
        },
    },
});

export const { newRoom } = roomsSlice.actions;

export default roomsSlice.reducer; 