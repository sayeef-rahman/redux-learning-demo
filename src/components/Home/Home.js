import React from 'react';
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
      {/* <Products></Products> */}
      <ProductCategories></ProductCategories>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;
