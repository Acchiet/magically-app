import React from "react";
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import Rune from './Components/Rune';
import Hero from './Components/Hero';
import Tag from './Components/Tag';



function App() {

  return( 
  
    <HashRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="Runas" element={<Rune />} />
        <Route path="Tag" element={<Tag />} />
      </Routes>
    </HashRouter>  
)
}

export default App;

