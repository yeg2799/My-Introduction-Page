import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
import "../../style/Content/blog.scss";
import SocialMedia from "../../components/socialMedia";
import blogText from "../../assets/data/blog";
import { Link } from "react-router-dom";
const blogCard = () => {
  return (
    <React.Fragment>
      {blogText.map((blog, index) => (
        <Card className="blog-card" key={"blog" + index}>
          <CardImg
            src={blog.blogImage}
            alt="Card image cap"
            className="blogCard-Image"
          />
          <CardBody className="blogCard-body">
            <CardTitle tag="h5">
              <Link to={`/blog/${index + 1}`}>{blog.blogTitle}</Link>
            </CardTitle>
            <CardSubtitle tag="h5" className="mb-2 text-muted">
              {blog.blogSubtitle}
            </CardSubtitle>
            <CardText>{blog.blogText.slice(0, 200)}</CardText>

            {/*Social Media */}
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
          </CardBody>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default blogCard;
