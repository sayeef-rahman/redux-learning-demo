import React from 'react';
import values from '../../assets/career/values.jpg';

const OurValues = () => {
    return (
        <div className='container text-center mt-5 '>
            <h1>Our values</h1>
            <div className='w-100'>
                <img src={values} alt="" />
            </div>
        </div>
    );
};

export default OurValues;