import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="heading">MyRecipeBook</div>
        <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-recipe">Add Recipe</Link></li>
            <li><Link to="/saved-recipes">Saved</Link></li>
        </ul>
    </div>
  );
};

export default Navbar;
