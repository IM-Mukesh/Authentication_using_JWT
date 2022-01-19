import React from 'react';
import Register from './Register';
import Login from './Login';
import Navbar from './Navbar';
import './Navbar.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;