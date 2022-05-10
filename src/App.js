import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from './Home';

import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Projects from './Projects';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/project' element={<Projects/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Navigate to='/' replace />}/>
      </Routes>
    </>
  );
}

export default App;
