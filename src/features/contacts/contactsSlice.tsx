import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {},
    reducers: {
        newContact: (state, action) => { 
        },
    },
});

export const { newContact } = contactsSlice.actions;

export default contactsSlice.reducer; 