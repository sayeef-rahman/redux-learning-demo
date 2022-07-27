import React from 'react';
import './Showcase.css';
import showcase1 from '../../assets/showcase/showcase1.jpg'
import showcase2 from '../../assets/showcase/showcase2.jpg'
import showcase3 from '../../assets/showcase/showcase3.jpg'

const Showcase = () => {
  return (
    <div className='d-flex justify-content-evenly align-items-center showcase-container my-5'>
      <img src={showcase1} alt="" className='w-25' />
      <img src={showcase2} alt="" className='w-25'/>
      <img src={showcase3} alt="" className='w-25'/>
    </div>
  );
};

export default Showcase;