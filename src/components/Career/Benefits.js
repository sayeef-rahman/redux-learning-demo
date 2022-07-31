import React from "react";
import "./Benefits.css";
import { GiLoveMystery } from "react-icons/gi";
import { GrDocumentTime } from "react-icons/gr";

const Benefits = () => {
  return (
    <div className="container text-center">
      <h1 className="text-uppercase text-warning fw-bold mt-5">
        Other Benefits
      </h1>
      <div className="my-3">
        <div>
          <GiLoveMystery className="benefits-icons "></GiLoveMystery>
        </div>
        <h5 className="fs-6">Comprehensive Health Plans</h5>
      </div>

      <div  className="my-3">
        <div>
          <GrDocumentTime className="benefits-icons"></GrDocumentTime>
        </div>
        <h5 className="fs-6">Paid Volunteer Time</h5>
      </div>

      <div className="my-3">
        <div>
          <GiLoveMystery className="benefits-icons"></GiLoveMystery>
        </div>
        <h5 className="fs-6">Healthy Food & Snacks</h5>
      </div>

      <div className="my-3">
        <div>
          <GiLoveMystery className="benefits-icons"></GiLoveMystery>
        </div>
        <h5 className="fs-6">Generous Parental & Family Leave</h5>
      </div>
    </div>
  );
};

export default Benefits;
