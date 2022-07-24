import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BallTriangle } from 'react-loader-spinner';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading-tiangle'>
      <BallTriangle height='100' width='100' color='grey' ariaLabel='loading' />
    </div>
  );
};

export default Loading;
