import React from "react";
import "./CareerTopSection.css";
import SingleJob from "./SingleJob";


// d-flex justify-content-center align-items-center
const CurrentJobs = () => {
  return (
    <div>
      <h1 className="text-center mt-5 pt-3 text-uppercase fw-bold">Open Career Roles</h1>
      <SingleJob></SingleJob>
      <SingleJob></SingleJob>
      <SingleJob></SingleJob>
      <SingleJob></SingleJob>
    </div>
  );
};

export default CurrentJobs;
