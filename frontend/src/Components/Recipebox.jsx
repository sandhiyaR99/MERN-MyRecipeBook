import React from 'react';
import '../Style/Recipebox.css';

const Recipebox = ({ recipe }) => {
  const PostSavedRecipes = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/saved`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });

    if (response.ok) {
      alert("Recipe saved!");
    }
  };

  return (
    <div className="recipe-box">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-details">
        <h2 className="recipe-title">{recipe.title}</h2>
        <p className="recipe-info">INSTRUCTION: {recipe.process}</p>
        <p className="recipe-time">Time: {recipe.time} minutes</p>
        <p className="recipe-serves">Serves: {recipe.serves}</p>
        <button className="add-to-cart-button" onClick={PostSavedRecipes}>
          Click to save
        </button>
      </div>
    </div>
  );
};

export default Recipebox;
