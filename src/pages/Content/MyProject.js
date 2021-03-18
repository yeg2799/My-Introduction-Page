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
      <CardTitle tag="h3" className="my-project-card-title">My Website</CardTitle>
        <CardImg
          src={projectImage}
          alt="Card image cap"
          className="my-project-card-image"
        />
        <a href="https://yeg27.netlify.app" target="_blank" className="project-link"><div className="projectCardButton">İncele</div></a>
      </Card>

       
        
        <Card className="my-project-card">
      <CardTitle tag="h3" className="my-project-card-title">Covid-19 Tracker</CardTitle>
        <CardImg
          src={projectImage}
          alt="Card image cap"
          className="my-project-card-image"
        />
        <a href="https://covd19-yeg.netlify.app/" target="_blank" className="project-link"><div className="projectCardButton">İncele</div></a>
      </Card>
       
    
      </div>
      
    </div>
  );
};

export default MyProject;
