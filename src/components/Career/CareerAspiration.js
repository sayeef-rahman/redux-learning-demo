import React from "react";
import "./CareerAspiration.css";
import imran from "../../assets/career/imran.jpg";

const CareerAspiration = () => {
  return (
    <div className="container mt-5 pt-2 text-center">
      <h1 className="fs-4 text-uppercase">Career Aspiration</h1>
      <div className="mt-4">
        <img src={imran} alt="" className="border border-4 rounded-circle" />
        <h4 className="text-uppercase fs-5 mt-3 mb-0">Md. Imran Hasan</h4>
        <p className="text-center">
          Assistant Manager, Operation & Fulfillment Department.
        </p>
        <p className="px-3">
          Imran started off as an Executive at Operation & Fulfillment
          Department 2 years back. Today he is handling the huge responsibility
          of Operation & Fulfillment Department as an Assistant Manager. And
          because of his supervision power, we are growing rapidly throughout
          the country. "Sindabad has provided me the opportunity to have an
          immense growth in my career. It’s my pleasure to work for Sindabad.
          Here, we have a beautiful working environment and positive gesture
          from management."
        </p>
      </div>
    </div>
  );
};

export default CareerAspiration;
