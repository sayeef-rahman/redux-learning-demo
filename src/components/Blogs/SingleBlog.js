import React from "react";
import "./SingleBlog.css";
import blog from "../../assets/blogs/blog.jpg";

const SingleBlog = () => {
  return (
    <div className="card">
      <img src={blog} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          SINDABAD.COM WINS THE CHANNEL I DIGITAL MEDIA AWARD 2020
        </h5>
        <p className="card-text py-2">
          Bangladesh’s first and largest B2B e-commerce marketplace,
          Sindabad.com, has clinched the Channel I Digital Media Award 2020 in
          the category of Best B2B E-Commerce 2020.
        </p>
      </div>
      <div className="mx-auto">
        <button className="text-center text-dark">Read More</button>
      </div>
      <div className="mx-auto">
        <button className="text-center text-dark">Read More</button>
      </div>
    </div>
  );
};

export default SingleBlog;
