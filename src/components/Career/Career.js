import React from 'react';
import Benefits from './Benefits';
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
        </div>
    );
};

export default Career;