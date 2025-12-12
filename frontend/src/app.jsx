import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Dev from "./pages/Developpement";        
import Sport from "./pages/Sport";    
import Formation from "./pages/Formation"; 
import Programmes from "./pages/Programmes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Accueil />} />
         <Route path="/dev" element={<Dev />} />        
         <Route path="/sport" element={<Sport />} />    
         <Route path="/formation" element={<Formation />} /> 
          <Route path="/programmes" element={<Programmes />} />
         
      </Routes>
    </BrowserRouter>
  );
};

export default App;
