import React from 'react';
import Products from './Products';
import Showcase from './Showcase';
import Slider from './Slider';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Showcase></Showcase>
      <Products></Products>
    </div>
  );
};

export default Home;
