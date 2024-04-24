import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/user/Login'
import User from './pages/User'
function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/home" exact element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/user" element={<User/>} />
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
