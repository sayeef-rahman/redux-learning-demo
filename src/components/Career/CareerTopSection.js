import React from "react";
import "./CareerTopSection.css";
import career from "../../assets/career/career.jpg";

const CareerTopSection = () => {
  return (
    <div className=" container career-top-container mx-auto">
      <div className="">
        <img src={career} alt="" className="image-top pb-0" />
      </div>
      <div className="d-block">
        <h4 className="text-center text-uppercase fs-1">
          We <span className="text-danger">don’t</span> offer jobs.
        </h4>
        <h4 className="text-center fw-bold text-uppercase fs-1">
          We offer <span className="text-warning">careers.</span>
        </h4>
        <p className="mt-4 px-3 px-lg-0">
          By joining <strong>sindabad.com</strong> you join an innovation race:
          a community of positive thinkers, employees, partners and customers
          who are committed to build communications networks and services for
          future generations. At sindabad.com, we don’t just accept creativity–
          we celebrate it, we support it, and we flourish on it for the
          betterment of our employees, our services and ideas. Sindabad.com is
          proud to be an equal opportunity workplace and is a positive action
          establishment. The secret of our achievement is the people we recruit
          – and we’re looking for the best. You do not necessarily need prior
          experience, but a curious mind and the proven ability to solve complex
          problems are essential, as is an outstanding academic record.
        </p>
      </div>
    </div>
  );
};

export default CareerTopSection;
