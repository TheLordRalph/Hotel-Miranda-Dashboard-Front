import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route to='/'/>
        <Route to='/booking'/>
        <Route to='/rooms'/>
        <Route to='/users'/>
        <Route to='/contact'/>
      </Router>
    </BrowserRouter>
  );
}

export default App;
