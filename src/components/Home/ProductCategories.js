import React from 'react';
import shirt from '../../assets/product_categories/shirt.jpg';

const ProductCategories = () => {
  return (
    <div className='container'>
      <h2 className='text-center'>Our Product Categories</h2>
      <div className='row'>

        {/* Left Column */}
        <div className='col'>
          <div className='single-product'>
            <img src={shirt} alt='' />
          </div>
        </div>

        {/* right column */}
        <div className='col'>
          {/* right column 1st row */}
          <div className="row">
            <div className="col">

            </div>
          </div>
          {/* right column 2nd row */}
          <div className="row">
            <div className="col">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
