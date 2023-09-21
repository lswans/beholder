import React from "react";
import './App.css';
import Map from './Map.js';
import Nav from './Nav.js';
import { Routes, Route } from 'react-router-dom';
import Search from './Search';
import About from './About';

function App() {
  return(
    <div>
      <Routes>
        <Route path="" element={[<Nav/>, <Map/>]}/>
        <Route path="Search" element={<Search/>}/>
        <Route path="About" element={<About/>}/>
      </Routes>
    </div>
  )
  
}

export default App;
