import React, { useEffect, useState } from 'react';
import '../Style/Saved.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Saved = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const GetSavedRecipes = async () => { 
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/saved`);
    const data = await response.json();
    setSavedRecipes(data); 
  };


  useEffect(() => {
    GetSavedRecipes();
  }, []);

  return (
    <div className="saved-container">
      <Navbar />
      <h1 className="saved-title">Saved Recipes</h1>
      {savedRecipes.length === 0 ? (
        <p className="saved-message">No saved recipes.</p>
      ) : (
        <ul className="saved-list">
          {savedRecipes.map(recipe => (
            <li className="saved-item" key={recipe._id}>
              <img src={recipe.image} alt={recipe.title}/>
              <h2>{recipe.title}</h2>
              <p>{recipe.process}</p>
              <p>Time: {recipe.time} minutes</p>
              <p>Serves: {recipe.serves}</p>
            </li>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
};

export default Saved;
