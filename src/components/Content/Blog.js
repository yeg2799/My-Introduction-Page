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
const Blog = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>Blog Yazılarım</h1>
      <Row className="blog-row">
        {/*1 */}
        <Card className="blog-card" >
          <Row>
            <Col xl="3" sm="5">
              <CardImg
                top
                
                src={projectImage}
                alt="Card image cap"
                className="blogCard-Image"
              />
            </Col>
            <Col xl="9" sm="7">
              <CardBody>
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
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  
                }}
              >
                <a href="" target="_blank">
                  <AiFillFacebook
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillInstagram
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillLinkedin
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillTwitterSquare
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillGithub
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
              </div>
              </CardBody>
            </Col>
          </Row>
        </Card>
             {/*2*/}
        <Card className="blog-card">
          <Row>
            <Col xl="3" sm="5">
              <CardImg
                top
                width="100%"
                src={projectImage}
                alt="Card image cap"
                className="blogCard-Image"
              />
            </Col>
            <Col xl="9" sm="7">
              <CardBody>
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
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  
                }}
              >
                <a href="" target="_blank">
                  <AiFillFacebook
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillInstagram
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillLinkedin
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillTwitterSquare
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillGithub
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
              </div>
              </CardBody>
            </Col>
          </Row>
        </Card>
 {/*3 */}
        <Card className="blog-card">
          <Row>
            <Col xl="3" sm="5">
              <CardImg
                top
                width="100%"
                src={projectImage}
                alt="Card image cap"
                className="blogCard-Image"
                
              />
            </Col>
            <Col xl="9" sm="7">
              <CardBody>
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
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  
                }}
              >
                <a href="" target="_blank">
                  <AiFillFacebook
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillInstagram
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillLinkedin
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillTwitterSquare
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
                <a href="" target="_blank">
                  <AiFillGithub
                    style={{ fontSize: "40px", color: "#13285E" }}
                  />
                </a>
              </div>
              </CardBody>
            </Col>
          </Row>
        </Card>    
      </Row>




      <Pagination aria-label="Page navigation example" style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
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
    </Pagination>
    </div>
  );
};

export default Blog;
