import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="hero-image">
        <img src="./public/images/hero-image.jpeg" alt="Ebukhosi Resort Top View" />
      </div>
      <div className="container">
        <h2>Welcome to Ebukhosini Resort</h2>
        <p>Your perfect getaway destination. Enjoy luxurious stays and beautiful scenery.</p>
      </div>
    </div>
  );
};

export default HomePage;
