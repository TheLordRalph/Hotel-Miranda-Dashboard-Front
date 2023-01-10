import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataRooms from '../../JSON/rooms.json';



export const getRooms = createAsyncThunk('rooms/fetchRooms', async () => {
    setTimeout(() => {
        return dataRooms.rooms;
    }, 200);
})

export const createRoom = createAsyncThunk('rooms/createRoom', async (newRoom) => {
    setTimeout(() => {
        return newRoom;
    }, 200);
})

export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async (idRoom) => {
    setTimeout(() => {
        return idRoom;
    }, 200);
})

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        status: "loading"
    },
    reducers: {
        // setOrderRoom: (state, action) => { 
        //     const selectRoom = state[action.payload.source];
        //     state[action.payload.source] = state[action.payload.destination];
        //     state[action.payload.destination] = selectRoom;
        // },
    },
    extraReducers(builder) {
        builder
            .addCase(getRooms.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getRooms.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.rooms = action.payload;
            })
            .addCase(getRooms.rejected, (state, action) => {
                state.status = 'failed';
                console.error('Error to fetch data rooms');
            });
        builder
            .addCase(createRoom.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.rooms.push(action.payload);
            })
        builder
            .addCase(deleteRoom.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.rooms = state.rooms.filter((room) => room.idHabitacion !== action.payload);
            })
    }
});

export default roomsSlice.reducer; 