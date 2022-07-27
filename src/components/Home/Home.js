import React from 'react';
import Freatures from './Freatures';
import ProductCategories from './ProductCategories';
import Products from './Products';
import Showcase from './Showcase';
import Slider from './Slider';
import Subscription from './Subscription';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Showcase></Showcase>
      <Products></Products>
      <Freatures></Freatures>
      <ProductCategories></ProductCategories>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;
