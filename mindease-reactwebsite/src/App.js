import React from 'react';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import AboutUs from './components/pages/AboutUs';
import RegisterClient from './components/pages/RegisterClient';
import RegisterTherapist from './components/pages/RegisterTherapist';
import MyTherpist from './components/pages/MyTherapist';

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Profile" element={<Profile />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/AboutUs" element={<AboutUs />} /> 
        <Route path="/RegisterClient" element={<RegisterClient />} /> 
        <Route path="/RegisterTherapist" element={<RegisterTherapist />} /> 
        <Route path="/MyTherapist" element={<MyTherpist />} /> 
      </Routes>
    </Router>
    </>
  );
}
export default App;
