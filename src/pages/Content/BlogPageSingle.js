/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Redirect } from "react-router";
import data from "../../assets/data/blog";
import {  Link, useParams } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
import "../../style/Content/aboutme.scss";

import "../../style/Content/blogPageSingle.scss";
import SocialMediaAccounts from "../../components/SocialMedia/SocialMediaAccounts";

const BlogPageSingle = (props) => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    console.log(id);
  });

  if (id !== undefined && parseInt(id) <= data.length) {
    const item = data[parseInt(id) - 1];
    if (item) {
      return (
        <div className="blogPageSingle">
          <div className="blog-card">
            <img
              src={item.blogImage}
              alt="Card image cap"
              className="blogCard-Image"
            ></img>
            <div className="blogText">
                <h1 className="blogText-title">{item.blogTitle}</h1>
                <h5>{item.blogSubtitle}</h5>
                <p>{item.blogText}</p>
                <SocialMediaAccounts/>
            </div>
          </div>
          <div className="otherBlogs">
            {data.length!==0? data.map((blog,index)=>(
                  <Link to={`/blog/${index+1}`} className="otherLinks">{blog.blogTitle}</Link>
            )):""}
        </div>
        </div>
      );
    } else {
      return <Redirect to="/blog" />;
    }
  } else {
    return <Redirect to="/blog" />;
  }
};

export default BlogPageSingle;
