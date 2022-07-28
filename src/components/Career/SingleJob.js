import React from 'react';
import { HiOutlineBriefcase } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";
import { FaUsersCog } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const SingleJob = () => {
    return (
        <div className="d-flex justify-content-around align-items-center border border-3 mx-auto container my-4">
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
            <GrMapLocation className="fs-1"></GrMapLocation>
          </div>
          <div className="ms-3">
            <p className="m-0 p-0 fw-bold">Location</p>
            <p className="m-0 p-0">Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center py-3 single-feature">
          <div>
            <FaUsersCog className="fs-1"></FaUsersCog>
          </div>
          <div className="ms-3">
            <p className="m-0 p-0 fw-bold">Experience</p>
            <p className="m-0 p-0">02-04 Years</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center py-3 single-feature">
          <div>
            <GiTakeMyMoney className="fs-1"></GiTakeMyMoney>
          </div>
          <div className="ms-3">
            <p className="m-0 p-0 fw-bold">Salary</p>
            <p className="m-0 p-0">Negotiable</p>
          </div>
        </div>
        <div>
          <button className="text-dark p-2 rounded">View Details</button>
        </div>
      </div>
    );
};

export default SingleJob;