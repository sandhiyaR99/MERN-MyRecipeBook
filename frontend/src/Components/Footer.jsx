import React from 'react';
import "../Style/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy; {new Date().getFullYear()} MyRecipeBook. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Footer;
