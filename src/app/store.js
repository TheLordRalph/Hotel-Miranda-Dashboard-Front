import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from '../features/bookings/bookingsSlice';
import contactsReducer from '../features/contacts/contactsSlice';
import roomsReducer from '../features/rooms/roomsSlice';
import usersReducer from '../features/users/usersSlice';

export default configureStore({
  reducer: {
    bookingsReducer: bookingsReducer,
    contactsReducer: contactsReducer,
    roomsReducer: roomsReducer,
    usersReducer: usersReducer
  }
})