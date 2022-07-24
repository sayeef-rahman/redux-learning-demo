import React from 'react';
import Loading from '../Shared/Loading/Loading';
import Products from './Products';
import Slider from './Slider';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Products></Products>
    </div>
  );
};

export default Home;
