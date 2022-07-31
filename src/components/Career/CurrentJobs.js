import React from "react";
import "./CareerTopSection.css";
import SingleJob from "./SingleJob";


// d-flex justify-content-center align-items-center
const CurrentJobs = () => {
  return (
    <div>
      <h1 className="text-center mb-4 text-uppercase fw-bold">Available Career Roles</h1>
      <SingleJob></SingleJob>
      <SingleJob></SingleJob>
      <SingleJob></SingleJob>
      <SingleJob></SingleJob>
    </div>
  );
};

export default CurrentJobs;
