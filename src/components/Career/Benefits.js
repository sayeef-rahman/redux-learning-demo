import React from "react";
import "./Benefits.css";
import { GiLoveMystery } from "react-icons/gi";
import { IoFastFoodSharp, IoTimerSharp } from "react-icons/io5";
import { MdBabyChangingStation } from "react-icons/md";
import { AiOutlineMergeCells } from "react-icons/ai";

const Benefits = () => {
  return (
    <div className="container text-center pt-2">
      <h1 className="text-uppercase my-3 pt-3 fs-4">Other Benefits</h1>
      <p className="px-3">
        There’s life at work & life outside of work. We want everyone to be
        healthy, travel often, get time to give back, & have the financial
        resources & support they need. There’s life at work & life outside
        of work. We want everyone to be healthy, travel often, get time to give
        back, & have the financial resources & support they need.
      </p>

      <div className="row mx-auto my-auto">
        <div className="my-3 col">
          <div>
            <GiLoveMystery className="benefits-icons "></GiLoveMystery>
          </div>
          <h5 className="fs-6">Comprehensive Health Plans</h5>
        </div>

        <div className="my-3 col">
          <div>
            <IoTimerSharp className="benefits-icons"></IoTimerSharp>
          </div>
          <h5 className="fs-6">Paid Volunteer Time</h5>
        </div>
      </div>
      <div className="row mx-auto my-auto">
        <div className="my-3 col">
          <div>
            <IoFastFoodSharp className="benefits-icons"></IoFastFoodSharp>
          </div>
          <h5 className="fs-6">Healthy Food & Snacks</h5>
        </div>

        {/* <div className="my-3">
        <div>
          <MdBabyChangingStation className="benefits-icons"></MdBabyChangingStation>
        </div>
        <h5 className="fs-6">Generous Parental & Family Leave</h5>
      </div> */}

        <div className="my-3 col">
          <div>
            <AiOutlineMergeCells className="benefits-icons"></AiOutlineMergeCells>
          </div>
          <h5 className="fs-6">Learning & Development</h5>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
