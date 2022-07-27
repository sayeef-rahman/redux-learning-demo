import React from 'react';
import './Subscription.css';

const Subscription = () => {
  const buttonClick = () => {
    console.log('clicked');
  };
  return (
    <div className='text-center subscription-container'>
      <h5>
        <span className='text-danger'>Special Offers</span> For Subscribers
      </h5>
      <h1 className='text-uppercase fw-bold'>
        Membership <span className='text-danger'>10% Discount</span>
      </h1>
      <h5 className='' style={{ fontSize: '14px' }}>
        Subscribe to our newsletters now and stay up-to-date with new
        collections, the latest lookbooks and exclusive offers.
      </h5>
      <div className='mt-5'>
        <input
          type='email'
          placeholder='Enter Email'
          className='input-text w-25 ps-4 me-3'
        />
        <button className='subscribe-btn'>SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Subscription;
