import React from 'react';
import Benefits from './Benefits';
import CareerAspiration from './CareerAspiration';
import CareerTopSection from './CareerTopSection';
import CurrentJobs from './CurrentJobs';
import OurValues from './OurValues';

const Career = () => {
    return (
        <div className=''>
            <CareerTopSection></CareerTopSection>
            <CurrentJobs></CurrentJobs>
            <Benefits></Benefits>
            <OurValues></OurValues>
            <CareerAspiration></CareerAspiration>
        </div>
    );
};

export default Career;