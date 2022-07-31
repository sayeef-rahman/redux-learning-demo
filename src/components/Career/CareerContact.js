import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { BsTelephonePlusFill } from "react-icons/bs";

const CareerContact = () => {
  return (
    <div className="container text-center mt-5 ">
      <h1 className="fs-4 text-uppercase">Contact US</h1>
      <div className="d-lg-flex justify-content-lg-end align-items-lg-center">
        <div className="d-flex align-items-center justify-content-center mx-auto my-1">
          <MdAttachEmail className="fs-2"></MdAttachEmail>
          <p className="mb-0 ms-2 fs-6">ambition@sindabad.com</p>
        </div>

        <div className="d-flex align-items-center justify-content-center mx-auto my-auto">
          <BsTelephonePlusFill className="fs-2"></BsTelephonePlusFill>
          <p className="mb-0 ms-2 fs-6">09612-002244</p>
        </div>
      </div>
    </div>
  );
};

export default CareerContact;
