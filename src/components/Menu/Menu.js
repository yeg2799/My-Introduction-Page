import React from "react";
import { Row } from "reactstrap";
import "../../style/Menu/menu.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillHome,
  AiFillProject,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import profilePicture from "../../images/profile.jpg";
import SideBarMenuButton from "./SideBarMenuButton";
import { Link } from "react-router-dom";
const Menu = () => {
  const sliderMenu = () => {
    return (
      <div className="menu">
        <Row>
          <img src={profilePicture} alt="profilresmi"></img>
        </Row>
        <Row className="menu-links">
          <Link to="/" className="link">
            <SideBarMenuButton Icon={AiFillHome} title="Anasayfa" />
          </Link>
          <Link to="/hakkimda" className="link">
            <SideBarMenuButton Icon={BsFillPersonFill} title="Hakkımda" />
          </Link>
          <Link to="/projelerim" className="link">
          <SideBarMenuButton
            Icon={AiFillProject}
            title="Projelerim"
          />
          </Link>
          <Link to="/blog" className="link">
          <SideBarMenuButton Icon={FaBlogger} to="/blog" title="Blog" />
          </Link>
          <Link to="/iletisim" className="link">
          <SideBarMenuButton
            Icon={MdContactMail}
            to="/iletisim"
            title="İletişim"
          />
          </Link>
         
          
        </Row>
        <Row className="menu-social">
          <a href="" target="_blank">
            <AiFillFacebook class="icon" />
          </a>
          <a href="" target="_blank">
            <AiFillInstagram class="icon" />
          </a>
          <a href="" target="_blank">
            <AiFillLinkedin class="icon" />
          </a>
          <a href="" target="_blank">
            <AiFillTwitterSquare class="icon" />
          </a>
          <a href="" target="_blank">
            <AiFillGithub class="icon" />
          </a>
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
