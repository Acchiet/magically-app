import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Rune from './Components/Rune';
import Hero from './Components/Hero';
import Tag from './Components/Tag';



function App() {

  return( 
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="Runas" element={<Rune />} />
        <Route path="Tag" element={<Tag />} />
      </Routes>
    </BrowserRouter>  
)
}

export default App;

