import React, { useState, useEffect } from 'react';
import Recipebox from '../Components/Recipebox';
import '../Style/Home.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const GetRecipes = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/recipes`);
    const data = await response.json();
    setRecipes(data);
  };

  useEffect(() => {
    GetRecipes();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <Navbar />
      <h1 className="home-title">Search Your Cravings Recipe</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Type here to search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="recipe-list">
        {filteredRecipes.map(recipe => (
          <Recipebox key={recipe._id} recipe={recipe} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;