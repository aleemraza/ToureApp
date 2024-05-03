import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/user/Login'
import User from './pages/User'
import Tour from './pages/Tour';
import Booking from './pages/Booking'
import CreateToure from './pages/CreateToure';
function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/tour" element={<Tour/>} />
    <Route path="/user" element={<User/>} />
    <Route path="/booking" element={<Booking/>} />
    <Route path='/createtoure' element={<CreateToure/>}/>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
