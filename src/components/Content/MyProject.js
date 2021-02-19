import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Row,
} from "reactstrap";
import projectImage from '../../images/projectImage.jpg'
const MyProject = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Projelerim</h1>
      <Row style={{margin:"0",padding:"50px"}}>
      <Card style={{width:"30%",margin:"20px",borderRadius:"20px"}}>
      <CardTitle tag="h3" style={{textAlign:"center"}}>Card title</CardTitle>
        <CardImg
          top
          width="100%"
          src={projectImage}
          alt="Card image cap"
        />
      </Card>
      <Card style={{width:"30%",margin:"20px",borderRadius:"20px"}}>
      <CardTitle tag="h3" style={{textAlign:"center"}}>Card title</CardTitle>
        <CardImg
          top
          width="100%"
          src={projectImage}
          alt="Card image cap"
        />
      </Card>
      <Card style={{width:"30%",margin:"20px",borderRadius:"20px"}}>
      <CardTitle tag="h3" style={{textAlign:"center"}}>Card title</CardTitle>
        <CardImg
          top
          width="100%"
          src={projectImage}
          alt="Card image cap"
        />
      </Card>
      <Card style={{width:"30%",margin:"20px",borderRadius:"20px"}}>
      <CardTitle tag="h3" style={{textAlign:"center"}}>Card title</CardTitle>
        <CardImg
          top
          width="100%"
          src={projectImage}
          alt="Card image cap"
        />
      </Card>
      <Card style={{width:"30%",margin:"20px",borderRadius:"20px"}}>
      <CardTitle tag="h3" style={{textAlign:"center"}}>Card title</CardTitle>
        <CardImg
          top
          width="100%"
          src={projectImage}
          alt="Card image cap"
        />
      </Card>
      <Card style={{width:"30%",margin:"20px",borderRadius:"20px"}}>
      <CardTitle tag="h3" style={{textAlign:"center"}}>Card title</CardTitle>
        <CardImg
          top
          width="100%"
          src={projectImage}
          alt="Card image cap"
        />
      </Card>
      </Row>
      
    </div>
  );
};

export default MyProject;
