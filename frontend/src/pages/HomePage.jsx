import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Carousel from '../components/Carousel.jsx';
import Footer from '../components/Footer.jsx';
import MenuTiles from '../components/MenuTiles.jsx';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <MenuTiles />
      <Footer />
    </>
  );
};

export default HomePage;
