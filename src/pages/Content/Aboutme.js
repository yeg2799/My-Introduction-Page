import React, { useState } from "react";
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
import SocialMedia from "../../components/socialMedia";
const Aboutme = () => {
  const [text, setText] = useState(`
  Lorem ipsum dolor sit amet"
  consectetur adipisicing elit. Cumqueid velit neque at hic vero, dicta expedita praesentium officia
  adipisci sequi animi consequuntur dignissimos incidunt iure
  dolore. Debitis, fuga minima? Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Cumque id velit neque at hic vero,
  dicta expedita praesentium officia adipisci sequi animi
  consequuntur dignissimos incidunt iure dolore. Debitis, fuga
  minima? Lorem ipsum dolor sit amet, consectetur adipisicing
  elit. Cumque id velit neque at hic vero, dicta expedita
  praesentium officia adipisci sequi animi consequuntur
  dignissimos incidunt iure dolore. Debitis, fuga minima? Lorem
`);
  const [img, setImg] = useState([
    { src: profileImage },
    { src: profileImage },
    { src: profileImage },
    { src: profileImage },
    { src: profileImage },
  ]);
  return (
    <div className="about-me" style={{ paddingTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>Hakkımda</h1>
     
      <Row style={{ marginTop: "40px", marginRight: "0px", marginLeft: "0" }}>
        <Col sm="4">
          <img className="about-img" src={profileImage} alt="sacasc"></img>
        </Col>
        <Col>
          <div>
            <div>
              <span class="about-text">
                {text}
              </span>

              <div
                className="menu-social"
              >
                <SocialMedia
                  href="https://www.facebook.com/emre.guzel.3386/"
                  Icon={AiFillFacebook}
                />
                <SocialMedia
                  href="https://www.instagram.com/_emrguzel_/"
                  Icon={AiFillInstagram}
                />
                <SocialMedia
                  href="https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/"
                  Icon={AiFillLinkedin}
                />
                <SocialMedia
                  href="https://twitter.com/emrex99"
                  Icon={AiFillTwitterSquare}
                />
                <SocialMedia
                  href="https://github.com/yeg2799"
                  Icon={AiFillGithub}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <hr></hr>
      <Row style={{ marginRight: "0", marginLeft: "0", display: "flex" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <AiFillInstagram style={{ fontSize: "40px", color: "#13285E" }} />
          <h3>Instagram</h3>
        </div>
        <div className="instagram-images">
          {img.length !== 0
            ? img.map((image) => (
                <img src={image.src} alt="" className="insta"></img>
              ))
            : "Boş"}
        </div>
      </Row>
    </div>
  );
};

export default Aboutme;
