import React from 'react';
import men from '../../assets/product_categories/men.jpg';
import sunglass from '../../assets/product_categories/sunglass.jpg';
import women from '../../assets/product_categories/women.jpg';
import shoe from '../../assets/product_categories/shoe.jpg';
import handbags from '../../assets/product_categories/handbags.jpg';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
  return (
    <div className='container'>
      <h2 className='text-center my-5 text-uppercase fw-bold'>
        Our Product Categories
      </h2>
      <div className='row'>
        {/* Left Column */}
        <div className='col-lg-6'>
          <div className='single-product'>
            <Link to='men_clothing'>
              <img src={men} alt='' className='w-100' />
            </Link>
          </div>
        </div>

        {/* right column */}
        <div className='col-lg-6'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='single-product mb-4'>
                <Link to='women_clothing'>
                  <img src={women} alt='' className='w-100' />
                </Link>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='single-product mb-4'>
                <Link to='shoes'>
                  <img src={shoe} alt='' className='w-100' />
                </Link>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='single-product'>
                <Link to='bags'>
                  <img src={handbags} alt='' className='w-100' />
                </Link>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='single-product'>
                <Link to='sunglasses'>
                  <img src={sunglass} alt='' className='w-100' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
