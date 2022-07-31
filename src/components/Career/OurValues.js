import React from 'react';
import './OurValues.css';
import values from '../../assets/career/values.jpg';

const OurValues = () => {
    return (
        <div className='container text-center mt-5 '>
            <h1 className='fs-4 text-uppercase mb-3'>Our values</h1>
            <div className='our-values-image'>
                <img src={values} alt="" />
            </div>
        </div>
    );
};

export default OurValues;