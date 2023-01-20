import { createSlice } from "@reduxjs/toolkit";

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: {},
    reducers: {
        newBooking: (state, action) => { 
        },
    },
});

export const { newBooking } = bookingsSlice.actions;

export default bookingsSlice.reducer; 