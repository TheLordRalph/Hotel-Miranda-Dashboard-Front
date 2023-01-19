import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import Header from './layout/header';
import ProtectedRoutes from './pages/protectedRoutes';
import Home from './pages/home';
import Booking from './features/bookings/booking';
import Rooms from './features/rooms/rooms';
import Users from './features/users/users';
import Contact from './features/contacts/contact';
import BookingDetail from './components/bookingDetail';
import RoomDetail from './components/roomDetail';
import NewRoom from './components/newRoom';
import { LoginContextType } from './types';


interface State {
  isAuthenticated: boolean
  user: string
  email: string
};

interface CountAction {
  type: string;
  payload: {
    user: string
    email: string
  };
}

const initialState = {
  isAuthenticated: false,
  user: "",
  email: "",
};

const reducerAuth = (state: State, action: CountAction) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        email: action.payload.email
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
        user: "",
        email: ""
      };
    case "updateUser":
      return {
        
      };
    default:
      return state;
  }
}

export const authContext = React.createContext<LoginContextType | null>(null);

function App() {
  const [state, dispatch] = React.useReducer(reducerAuth, initialState);

  return (
    <BrowserRouter>
      <authContext.Provider value={{state, dispatch}}>
        {state.isAuthenticated ? <Header /> : <></>}
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Home />}></Route>
            <Route path='/booking' element={<Booking />}></Route>
            <Route path='/booking/:id' element={<BookingDetail />}></Route>
            <Route path='/rooms' element={<Rooms />}></Route>
            <Route path='/rooms/:id' element={<RoomDetail />}></Route>
            <Route path='/rooms/newroom' element={<NewRoom />}></Route>
            <Route path='/users' element={<Users />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Route>
        </Routes>
      </authContext.Provider>
    </BrowserRouter>
  );
}

export default App;
initialState