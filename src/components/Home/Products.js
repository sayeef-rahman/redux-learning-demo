import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('demo.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className='product-container'>
      {/* Title & All Product button section */}
      <div className='d-flex justify-content-between w-75 mx-auto'>
        <div>
          <h2>Our Products</h2>
        </div>
        <div>
          <button className='btn-viewAll'>View All >></button>
        </div>
      </div>

      {/* all products card */}
      <div className='container'>
        <div className='row'>
          {products.slice(0, 10).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
