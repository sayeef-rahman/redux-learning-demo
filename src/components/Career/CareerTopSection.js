import React from "react";
import "./CareerTopSection.css";
import career from "../../assets/career/career.jpg";

const CareerTopSection = () => {
  return (
    <div className="career-top-container mx-auto d-flex justify-content-center align-items-center">
      <div className="p-3 d-block px-lg-5">
        <h4 className="fw-bold text-uppercase fs-1">We don’t offer jobs.</h4>
        <h4 className="fw-bold text-uppercase text-warning fs-1">We offer careers.</h4>
        <p className="my-5">
          By joining <strong>sindabad.com</strong> you join an innovation race: a community of
          positive thinkers, employees, partners and customers who are committed
          to build communications networks and services for future generations.
          At sindabad.com, we don’t just accept creativity – we celebrate it, we
          support it, and we flourish on it for the betterment of our employees,
          our services and ideas.
        </p>
      </div>
      <div className="">
        <img src={career} alt="" className="image-top" />
      </div>
    </div>
  );
};

export default CareerTopSection;