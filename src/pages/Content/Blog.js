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
import projectImage from "../../assets/images/projectImage.jpg";
import '../../style/Content/blog.scss'
import SocialMedia from "../../components/socialMedia";
import blogText from '../../assets/data/blog'
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div className="blog">
      <h1  className="blog-title">Blog Yazılarım</h1>
      <div className="blog-row">
        {blogText.map((blog,index)=>(
            <Card className="blog-card" key={"blog"+index}>
            <CardImg
              src={blog.blogImage}
              alt="Card image cap"
              className="blogCard-Image"
            />
            <CardBody className="blogCard-body">
              <CardTitle tag="h5"><Link to={`/blog/${index+1}`}>{blog.blogTitle}</Link></CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {blog.blogSubtitle}
              </CardSubtitle>
              <CardText>
                {blog.blogText}
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
        ))}
      
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
