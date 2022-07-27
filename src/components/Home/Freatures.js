import React from 'react';
import './Freatures.css';
import { RiTruckFill } from 'react-icons/ri';
import { GiReturnArrow } from 'react-icons/gi';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { MdSupportAgent } from 'react-icons/md';

const Freatures = () => {
  return (
    <div className='freatures-container border border-3 mx-auto'>
      <div className='d-flex align-items-center justify-content-center py-3 single-feature'>
        <div>
          <RiTruckFill className='fs-1'></RiTruckFill>
        </div>
        <div className='ms-3'>
          <p className='m-0 p-0 fw-bold'>Free Shipping</p>
          <p className='m-0 p-0'>On order over $75</p>
        </div>
      </div>

      <div className='d-flex align-items-center justify-content-center py-3 single-feature'>
        <div>
          <GiReturnArrow className='fs-1'></GiReturnArrow>
        </div>
        <div className='ms-3'>
          <p className='m-0 p-0 fw-bold'>Free Returns</p>
          <p className='m-0 p-0'>Within 9 days</p>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-center py-3 single-feature'>
        <div>
          <BsFillShieldLockFill className='fs-1'></BsFillShieldLockFill>
        </div>
        <div className='ms-3'>
          <p className='m-0 p-0 fw-bold'>100% Secure Payment</p>
          <p className='m-0 p-0'>Payment are safe with us</p>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-center py-3 single-feature'>
        <div>
          <MdSupportAgent className='fs-1'></MdSupportAgent>
        </div>
        <div className='ms-3'>
          <p className='m-0 p-0 fw-bold'>Support 24/7</p>
          <p className='m-0 p-0'>Contact anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Freatures;
