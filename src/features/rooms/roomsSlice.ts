import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import dataRooms from '../../JSON/rooms.json';
import type { RootState } from '../../app/store'


export interface Room {
    idHabitacion: string
    foto: string[]
    numeroHabitacion: string
    roomType: string
    amenities: string
    price: number
    offerPercent: number
    status: string
}

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

export const createRoom = createAsyncThunk('rooms/createRoom', async (newRoom: Room) => {
    return newRoom;
    // setTimeout(() => {
    // }, 200);
})

export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async (idRoom: string) => {
    setTimeout(() => {
        return idRoom;
    }, 200);
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
            .addCase(createRoom.fulfilled, (state, action: PayloadAction<Room>) => {
                state.status = 'succeeded';
                state.rooms.push(action.payload);
            })
        builder
            .addCase(deleteRoom.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.rooms = state.rooms.filter((room: any) => room.idHabitacion !== action.payload);
            })
    }
});

export default roomsSlice.reducer; 