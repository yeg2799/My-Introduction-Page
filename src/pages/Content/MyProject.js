/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import "../../style/Content/myProject.scss";
import projectDatas from "../../assets/data/myProject";
const MyProject = () => {
  return (
    <div className="my-project">
      <h1 className="my-project-title">Projelerim</h1>
      <div className="my-project-row">
        {projectDatas.length !== 0
          ? projectDatas.map((project, index) => (
              <Card className="my-project-card" key={`project/${index}`}>
                <CardTitle tag="h3" className="my-project-card-title">
                  {project.projectitle}
                </CardTitle>
                <CardImg
                  src={project.projectImage}
                  alt="Card image cap"
                  className="my-project-card-image"
                />
                <a
                  href={project.pageLink}
                  target="_blank"
                  className="project-link"
                >
                  <div className="projectCardButton">{project.seePage}</div>
                </a>
              </Card>
            ))
          : "Hiç Projeniz Bulunmamaktadır"}
      </div>
    </div>
  );
};

export default MyProject;
