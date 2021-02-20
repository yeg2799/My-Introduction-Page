import React from "react";
import { Col, Row } from "reactstrap";
import profileImage from "../../images/profile.jpg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
import "../../style/Content/aboutme.scss";
const Aboutme = () => {
  return (
    <div className="about-me" style={{ paddingTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>Hakkımda</h1>
      <Row style={{ marginTop: "40px", marginRight: "0px", marginLeft: "0" }}>
        <Col xs="4">
          <img
          className="about-img"
            src={profileImage}
            alt="sacasc"
           
          ></img>
        </Col>
        <Col >
          <div>
            <div>
              <span
              class="about-text"
             
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                id velit neque at hic vero, dicta expedita praesentium officia
                adipisci sequi animi consequuntur dignissimos incidunt iure
                dolore. Debitis, fuga minima? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Cumque id velit neque at hic vero,
                dicta expedita praesentium officia adipisci sequi animi
                consequuntur dignissimos incidunt iure dolore. Debitis, fuga
                minima? Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Cumque id velit neque at hic vero, dicta expedita
                praesentium officia adipisci sequi animi consequuntur
                dignissimos incidunt iure dolore. Debitis, fuga minima? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Cumque id
                velit neque at hic vero, dicta expedita praesentium officia
                adipisci sequi animi consequuntur dignissimos incidunt iure
                dolore. Debitis, fuga minima? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Cumque id velit neque at hic vero,
                dicta expedita praesentium officia adipisci sequi animi
                consequuntur dignissimos incidunt iure dolore. Debitis, fuga
                minima? Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Cumque id velit neque at hic vero, dicta expedita
                praesentium officia adipisci sequi animi consequuntur
                dignissimos incidunt iure dolore. Debitis, fuga minima? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Cumque id
                velit neque at hic vero, dicta expedita praesentium officia
                adipisci sequi animi consequuntur dignissimos incidunt iure
                dolore. Debitis, fuga minima?
              </span>

              <div
                className="menu-social"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingTop: "40px",
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
            </div>
          </div>
        </Col>
      </Row>
      <hr></hr>
      <Row style={{ marginRight: "0", marginLeft: "0", display: "flex" }}>
        <div style={{display:"flex",width:"100%",justifyContent:"center",textAlign:"center"}}>
          <AiFillInstagram style={{ fontSize: "40px", color: "#13285E" }} />
          <h3>Instagram</h3>
        </div>
        <div style={{paddingTop:"10px"}}>
          <img src={profileImage} alt="" className="insta"></img>
          <img src={profileImage} alt="" className="insta"></img>
          <img src={profileImage} alt="" className="insta"></img>
          <img src={profileImage} alt="" className="insta"></img>
          <img src={profileImage} alt="" className="insta"></img>
          <img src={profileImage} alt="" className="insta"></img>
          <img src={profileImage} alt="" className="insta"></img>
        </div>
      </Row>
    </div>
  );
};

export default Aboutme;
