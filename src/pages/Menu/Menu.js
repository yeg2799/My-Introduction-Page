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
import SocialMedia from "../../components/socialMedia";
const Menu = () => {
  const sliderMenu = () => {
    return (
      <div>
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
            <SideBarMenuButton Icon={AiFillProject} title="Projelerim" />
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
          <SocialMedia href="https://github.com/yeg2799" Icon={AiFillGithub} />
        </Row>
      </div>
    );
  };
  const smallMenu = () => {
    return (
      <div className="menu-hamburger">
        <GiHamburgerMenu className="icon" />
      </div>
    );
  };

  return (
    <div className="menu">

  {sliderMenu()}
  
  </div>
  )
  
};

export default Menu;
