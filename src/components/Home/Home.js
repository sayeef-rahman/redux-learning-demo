import React from 'react';
import Loading from '../Shared/Loading/Loading';
import TimeDate from '../Shared/Time&Date/TimeDate';
import Products from './Products';
import Slider from './Slider';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <TimeDate></TimeDate>
      <Products></Products>
    </div>
  );
};

export default Home;
