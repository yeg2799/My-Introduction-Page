import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Row,
} from "reactstrap";
import projectImage from '../../images/projectImage.jpg';
import '../../style/Content/myProject.scss';
const MyProject = () => {
  return (
    <div className="my-project">
      <h1 className="my-project-title">Projelerim</h1>
      <Row  className="my-project-row">
      <Card className="my-project-card">
      <CardTitle tag="h3" style={{textAlign:"center"}}>Card title</CardTitle>
        <CardImg
          top
          width="100%"
          src={projectImage}
          alt="Card image cap"
        />
      </Card>
      <Card className="my-project-card">
      <CardTitle tag="h3" style={{textAlign:"center"}}>Card title</CardTitle>
        <CardImg
          top
          width="100%"
          src={projectImage}
          alt="Card image cap"
        />
      </Card>
      <Card className="my-project-card">
      <CardTitle tag="h3" style={{textAlign:"center"}}>Card title</CardTitle>
        <CardImg
          top
          width="100%"
          src={projectImage}
          alt="Card image cap"
        />
      </Card>
      <Card className="my-project-card">
      <CardTitle tag="h3" style={{textAlign:"center"}}>Card title</CardTitle>
        <CardImg
          top
          width="100%"
          src={projectImage}
          alt="Card image cap"
        />
      </Card>
      <Card className="my-project-card">
      <CardTitle tag="h3" style={{textAlign:"center"}}>Card title</CardTitle>
        <CardImg
          top
          width="100%"
          src={projectImage}
          alt="Card image cap"
        />
      </Card>
      <Card className="my-project-card">
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
