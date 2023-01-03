import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import Header from './layout/header';
import ProtectedRoutes from './pages/protectedRoutes';
import Home from './pages/home';
import Booking from './pages/booking';
import Rooms from './pages/rooms';
import Users from './pages/users';
import Contact from './pages/contact';


const initialState = {
  isAuthenticated: false,
  user: null,
  email: null,
};

const reducerLogin = (state, action) => {
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
        user: null,
        email: null
      };
    case "updateUser":
      return {
        
      };
    default:
      return state;
  }
}

export const LoginContext = React.createContext();

function App() {
  const [state, dispatch] = React.useReducer(reducerLogin, initialState);

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{state, dispatch}}>
        {state.isAuthenticated ? <Header /> : <></>}
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Home />}></Route>
            <Route path='/booking' element={<Booking />}></Route>
            <Route path='/booking:id' element={<Booking />}></Route>
            <Route path='/room' element={<Rooms />}></Route>
            <Route path='/users' element={<Users />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Route>
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
