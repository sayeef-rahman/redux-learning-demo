import React from 'react';
import './Showcase.css';
import showcase1 from '../../assets/showcase/showcase1.jpg';
import showcase2 from '../../assets/showcase/showcase2.jpg';
import showcase3 from '../../assets/showcase/showcase3.jpg';

const Showcase = () => {
  return (
    <div className='mx-lg-3'>
      <div className='row'>
        <div className='col-lg-4 col-sm-6'>
          <div className='single-showcase mb-5 overflow-hidden'>
            <img src={showcase1} alt='' className='img-hover-zoom' />
          </div>
        </div>
        <div className='col-lg-4 col-sm-6'>
          <div className='single-showcase mb-5 overflow-hidden'>
            <img src={showcase2} alt='' className='img-hover-zoom' />
          </div>
        </div>
        <div className='col-lg-4 col-sm-6'>
          <div className='single-showcase mb-5 overflow-hidden'>
            <img src={showcase3} alt='' className='img-hover-zoom' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
