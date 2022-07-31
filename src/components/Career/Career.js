import React from 'react';
import Benefits from './Benefits';
import CareerTopSection from './CareerTopSection';
import CurrentJobs from './CurrentJobs';

const Career = () => {
    return (
        <div>
            <CareerTopSection></CareerTopSection>
            <CurrentJobs></CurrentJobs>
            <Benefits></Benefits>
        </div>
    );
};

export default Career;