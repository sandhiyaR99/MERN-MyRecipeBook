import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import AddRecipe from './Pages/AddRecipe';
import Saved from './Pages/Saved'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/saved-recipes" element={<Saved />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
