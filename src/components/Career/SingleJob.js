import React from "react";
import './SingleJob.css';
import { HiOutlineBriefcase } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";
import { FaUsersCog } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const SingleJob = () => {
  return (
    <div className="px-3 px-lg-0">
      <div className="container d-lg-flex justify-content-lg-evenly align-items-lg-center single-job-container mx-lg-auto my-4 px-3">

        <div className="d-flex pt-3 pt-lg-0 align-items-center my-auto py-lg-auto">
          <HiOutlineBriefcase className="fs-1"></HiOutlineBriefcase>
          <div className="ms-3">
            <p className="m-0 p-0 fw-bold">Position</p>
            <p className="m-0 p-0">Front End Developer</p>
          </div>
        </div>

        <div className="d-flex pt-3 pt-lg-0 align-items-center my-auto py-lg-auto">
          <div>
            <GrMapLocation className="fs-1"></GrMapLocation>
          </div>
          <div className="ms-3">
            <p className="m-0 p-0 fw-bold">Location</p>
            <p className="m-0 p-0">Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="d-flex pt-3 pt-lg-0 align-items-center my-auto py-lg-auto">
          <div>
            <FaUsersCog className="fs-1"></FaUsersCog>
          </div>
          <div className="ms-3">
            <p className="m-0 p-0 fw-bold">Experience</p>
            <p className="m-0 p-0">02-04 Years</p>
          </div>
        </div>

        <div className="d-flex pt-3 pt-lg-0 align-items-center my-auto py-lg-auto">
          <div>
            <GiTakeMyMoney className="fs-1"></GiTakeMyMoney>
          </div>
          <div className="ms-3">
            <p className="m-0 p-0 fw-bold">Salary</p>
            <p className="m-0 p-0">Negotiable</p>
          </div>
        </div>
        <div className="py-3 text-center">
          <button className="job-details-btn p-2 rounded">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
