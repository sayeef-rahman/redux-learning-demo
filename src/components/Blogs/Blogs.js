import React from "react";
import "./Blogs.css";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
  return (
    <div className="">
      <h1 className="text-center text-uppercase pt-5 mt-5">Our Blogs</h1>
      <div className="blogs-container container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 p-3 single-blog-container">
            <SingleBlog></SingleBlog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
