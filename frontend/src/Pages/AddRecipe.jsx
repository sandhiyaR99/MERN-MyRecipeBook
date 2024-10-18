import React, { useState } from 'react';
import '../Style/AddRecipe.css';
import Navbar from '../Components/Navbar';

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    image: '',
    title: '',
    process: '',
    time: '',
    serves: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRecipeData({ ...recipeData, image: reader.result });
      };
      reader.readAsDataURL(files[0]); 
    } else {
      setRecipeData({ ...recipeData, [name]: value });
    }
  };

  const PostRecipes = async() => {
    const Data = {
      image: recipeData.image,
      title: recipeData.title,
      process: recipeData.process,
      time: recipeData.time,
      serves: recipeData.serves
    };

    let response =await fetch(`${import.meta.env.VITE_BACKEND_URL}/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Data),
    })
    if (response.ok) {
      alert('Recipe added successfully!');
      setRecipeData({
        image: '',
        title: '',
        process: '',
        time: '',
        serves: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PostRecipes(); 
  };

  return (
    <>
    <Navbar/>
    <div className="add-recipe-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={recipeData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="process"
          placeholder="Recipe Process"
          value={recipeData.process}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="time"
          placeholder="Time (minutes)"
          value={recipeData.time}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="serves"
          placeholder="Serves"
          value={recipeData.serves}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
    </>
  );
};

export default AddRecipe;
