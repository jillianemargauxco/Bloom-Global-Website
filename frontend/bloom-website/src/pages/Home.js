import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  // Any component-specific logic can go here

  return (
    <div className="page">
     <Navbar/>
      <h1>Home</h1>
      <p>This is where you can add your page content.</p>
    </div>
  );
};

export default Home;
