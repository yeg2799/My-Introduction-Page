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
      <div  className="my-project-row">
      <Card className="my-project-card">
      <CardTitle tag="h3" className="my-project-card-title">Card title</CardTitle>
        <CardImg
          src={projectImage}
          alt="Card image cap"
          className="my-project-card-image"
        />
      </Card>
      <Card className="my-project-card">
      <CardTitle tag="h3" className="my-project-card-title">Card title</CardTitle>
        <CardImg
          src={projectImage}
          alt="Card image cap"
          className="my-project-card-image"
        />
      </Card>
      </div>
      
    </div>
  );
};

export default MyProject;
