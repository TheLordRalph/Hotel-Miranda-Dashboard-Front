import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import dataRooms from '../../JSON/rooms.json';
import type { RootState } from '../../app/store'
import { Room } from "../../types";


export interface CounterState {
    rooms: Room[]
    status: string
}
  
// Define the initial state using that type
const initialState: CounterState = {
    rooms: [],
    status: "loading"
}


export const getRooms = createAsyncThunk('rooms/fetchRooms', async () => {
    return dataRooms.rooms;
    // setTimeout(() => {
    // }, 200);
})

export const getSelectRoom = createAsyncThunk('rooms/getSelectRoom', async (idRoom: string) => {
    return idRoom;
    // setTimeout(() => {
    // }, 200);
})

export const createRoom = createAsyncThunk('rooms/createRoom', async (newRoom: Room) => {
    return newRoom;
    // setTimeout(() => {
    // }, 200);
})

export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async (idRoom: string) => {
    return idRoom;
    // setTimeout(() => {
    // }, 200);
})

export const editRoom = createAsyncThunk('rooms/editRoom', async (editRoom: Room) => {
    return editRoom;
    // setTimeout(() => {
    // }, 200);
})

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: initialState,
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
            .addCase(getRooms.fulfilled, (state, action: PayloadAction<Room[]>) => {
                state.status = 'succeeded';
                state.rooms = action.payload;
            })
            .addCase(getRooms.rejected, (state, action) => {
                state.status = 'failed';
                console.error('Error to fetch data rooms');
            });
        builder
            .addCase(getSelectRoom.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = 'succeeded';
                state.rooms = state.rooms.filter((room: Room) => room.idHabitacion === action.payload);
            });
        builder
            .addCase(createRoom.fulfilled, (state, action: PayloadAction<Room>) => {
                state.status = 'succeeded';
                state.rooms.push(action.payload);
            })
        builder
            .addCase(deleteRoom.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.rooms = state.rooms.filter((room: Room) => room.idHabitacion !== action.payload);
            })
        builder
            .addCase(editRoom.fulfilled, (state, action: PayloadAction<Room>) => {
                state.status = 'succeeded';
                state.rooms = state.rooms.map((room) => {
                    return room.idHabitacion === action.payload.idHabitacion ? action.payload : room;
                });
            })
    }
});

export default roomsSlice.reducer; 