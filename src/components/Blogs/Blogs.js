import React from "react";
import "./Blogs.css";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
  return (
    <div className="">
      <h1 className="text-center text-uppercase pt-5 mt-5">Our Blogs</h1>
      <div className="blogs-container container d-lg-flex">
        <div className="row">
          <div className="col p-3">
            <SingleBlog></SingleBlog>
          </div>
          <div className="col p-3">
            <SingleBlog></SingleBlog>
          </div>
          <div className="col p-3">
            <SingleBlog></SingleBlog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
