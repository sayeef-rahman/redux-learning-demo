import React from 'react';
import men from '../../assets/product_categories/men.jpg';
import sunglass from '../../assets/product_categories/sunglass.jpg';
import women from '../../assets/product_categories/women.jpg';
import shoe from '../../assets/product_categories/shoe.jpg';
import handbags from '../../assets/product_categories/handbags.jpg';

const ProductCategories = () => {
  return (
    <div className='container'>
      <h2 className='text-center my-5'>Our Product Categories</h2>
      <div className='row'>
        {/* Left Column */}
        <div className='col-lg-6'>
          <div className='single-product'>
            <img src={ men} alt='' className='w-100' />
          </div>
        </div>

        {/* right column */}
        <div className='col-lg-6'>
          {/* right column 1st row */}
          <div className='row'>
            <div className='col-lg-6'>
              <div className='single-product mb-4'>
                <img src={women} alt='' className='w-100' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='single-product mb-4'>
                <img src={shoe} alt='' className='w-100' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='single-product'>
                <img src={handbags} alt='' className='w-100' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='single-product'>
                <img src={sunglass} alt='' className='w-100' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
