import React from "react";
import BlogCard from "../../components/Card/blogCard";

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="blog-title">Blog Yazılarım</h1>
      <div className="blog-row">
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
