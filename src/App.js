import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import Home from './pages/home';
import Booking from './pages/booking';
import Rooms from './pages/rooms';
import Users from './pages/users';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/booking' element={<Booking />}></Route>
        <Route path='/booking:id' element={<Booking />}></Route>
        <Route path='/rooms' element={<Rooms />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
