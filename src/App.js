import React from 'react';
import Header  from './container/Header/Header';
import  Navbar from './components/Navbar/Navbar';
import './App.css';
import AboutUs from './container/AboutUs/AboutUs';

export const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
    </div>
  )
}

export default App