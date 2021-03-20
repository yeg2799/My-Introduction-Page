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
import SocialMedia from "../../components/socialMedia";
import "../../style/Content/blogPageSingle.scss";

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
                <div className="menu-social">
                <SocialMedia
                  href="https://www.facebook.com/emre.guzel.3386/"
                  Icon={AiFillFacebook}
                />
                <SocialMedia
                  href="https://www.instagram.com/_emrguzel_/"
                  Icon={AiFillInstagram}
                />
                <SocialMedia
                  href="https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/"
                  Icon={AiFillLinkedin}
                />
                <SocialMedia
                  href="https://twitter.com/emrex99"
                  Icon={AiFillTwitterSquare}
                />
                <SocialMedia
                  href="https://github.com/yeg2799"
                  Icon={AiFillGithub}
                />
              </div>
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
