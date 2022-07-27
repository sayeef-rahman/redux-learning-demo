import React from 'react';
import ProductCategories from './ProductCategories';
import Products from './Products';
import Showcase from './Showcase';
import Slider from './Slider';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Showcase></Showcase>
      {/* <Products></Products> */}
      <ProductCategories></ProductCategories>
    </div>
  );
};

export default Home;
