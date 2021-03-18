import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterSquare,
    AiFillGithub,
  } from "react-icons/ai";
import projectImage from "../../images/projectImage.jpg";
import '../../style/Content/blog.scss'
import { Link } from "react-router-dom";
import SocialMedia from "../../components/socialMedia";
const Blog = () => {
  return (
    <div className="blog">
      <h1  className="blog-title">Blog Yazılarım</h1>
      <div className="blog-row">
        {/*1 */}
        <Card className="blog-card">
              <CardImg
                src={projectImage}
                alt="Card image cap"
                className="blogCard-Image"
              />
              <CardBody className="blogCard-body">
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <div
                className="menu-social"
              >
                <SocialMedia href="https://www.facebook.com/emre.guzel.3386/"  Icon={AiFillFacebook} />
                <SocialMedia href="https://www.instagram.com/_emrguzel_/"  Icon={AiFillInstagram} />
                <SocialMedia href="https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/" Icon={AiFillLinkedin}/>
                <SocialMedia href="https://twitter.com/emrex99"  Icon={AiFillTwitterSquare}/>
                <SocialMedia href="https://github.com/yeg2799" Icon={AiFillGithub}/>
              </div>
              </CardBody>
           
         
        </Card> 
      </div>




      {/* <Pagination aria-label="Page navigation example" style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
    <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination> */}
    </div>
  );
};

export default Blog;
