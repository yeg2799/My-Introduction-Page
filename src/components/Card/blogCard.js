import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "../../style/Content/blog.scss";
import blogText from "../../assets/data/blog";
import { Link } from "react-router-dom";
import SocialMediaAccounts from "../SocialMedia/SocialMediaAccounts";
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
            <SocialMediaAccounts/>
          </CardBody>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default blogCard;
