import React from 'react';
import './Showcase.css';
import showcase1 from '../../assets/showcase/showcase1.jpg'
import showcase2 from '../../assets/showcase/showcase2.jpg'
import showcase3 from '../../assets/showcase/showcase3.jpg'

const Showcase = () => {
  return (
    <div className='d-flex justify-content-around align-items-center showcase-container'>
      <img src={showcase1} alt="" />
      <img src={showcase2} alt="" />
      <img src={showcase3} alt="" />
    </div>
  );
};

export default Showcase;