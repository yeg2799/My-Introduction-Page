import React from "react";
import { Row } from "reactstrap";
import "../../style/Menu/menu.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiFillProject, AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillTwitterSquare,AiFillGithub } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import profilePicture from "../../images/profile.jpg";
import SideBarMenuButton from "./SideBarMenuButton";
const Menu = () => {
  const sliderMenu = () => {
    return (
      <div className="menu">
        <Row >
          <img src={profilePicture} alt="profilresmi"></img>
        </Row>
        <Row className="menu-links">
          <SideBarMenuButton Icon={AiFillHome} to="/" title="Anasayfa" />
          <SideBarMenuButton
            Icon={BsFillPersonFill}
            to="/hakkimda"
            title="Hakkımda"
          />
          <SideBarMenuButton
            Icon={AiFillProject}
            to="/projelerim"
            title="Projelerim"
          />
          <SideBarMenuButton Icon={FaBlogger} to="/blog" title="Blog" />
          <SideBarMenuButton
            Icon={MdContactMail}
            to="/iletisim"
            title="İletişim"
          />
        </Row>
        <Row className="menu-social">
          <a href="" target="_blank"><AiFillFacebook style={{ fontSize: "40px",color:"#13285E" }} /></a>
          <a href="" target="_blank"><AiFillInstagram style={{ fontSize: "40px",color:"#13285E" }} /></a>
          <a href="" target="_blank"><AiFillLinkedin style={{ fontSize: "40px",color:"#13285E" }} /></a>
          <a href="" target="_blank"><AiFillTwitterSquare style={{ fontSize: "40px",color:"#13285E" }} /></a>
          <a href="" target="_blank"><AiFillGithub style={{ fontSize: "40px",color:"#13285E" }} /></a>
        </Row>
      </div>
    );
  };
  return (
    <React.Fragment>
      {sliderMenu()}
      <div className="menu-hamburger">
        <GiHamburgerMenu onSubmit={sliderMenu()} />
      </div>
    </React.Fragment>
  );
};

export default Menu;
