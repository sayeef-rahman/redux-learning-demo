import React from "react";
import "./CareerTopSection.css";
import { HiOutlineBriefcase } from "react-icons/hi";

// d-flex justify-content-center align-items-center
const CurrentJobs = () => {
  return (
    <div>
      <h1 className="text-center">Available Career Role</h1>
      <div className="d-flex justify-content-around align-items-center border border-3 mx-auto container">
        <div className="d-flex align-items-center justify-content-center py-3 single-feature">
          <div>
            <HiOutlineBriefcase className="fs-1"></HiOutlineBriefcase>
          </div>
          <div className="ms-3">
            <p className="m-0 p-0 fw-bold">Position</p>
            <p className="m-0 p-0">Front End Developer</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center py-3 single-feature">
          <div>
            <HiOutlineBriefcase className="fs-1"></HiOutlineBriefcase>
          </div>
          <div className="ms-3">
            <p className="m-0 p-0 fw-bold">Position</p>
            <p className="m-0 p-0">Front End Developer</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center py-3 single-feature">
          <div>
            <HiOutlineBriefcase className="fs-1"></HiOutlineBriefcase>
          </div>
          <div className="ms-3">
            <p className="m-0 p-0 fw-bold">Position</p>
            <p className="m-0 p-0">Front End Developer</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center py-3 single-feature">
          <div>
            <HiOutlineBriefcase className="fs-1"></HiOutlineBriefcase>
          </div>
          <div className="ms-3">
            <p className="m-0 p-0 fw-bold">Position</p>
            <p className="m-0 p-0">Front End Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentJobs;
