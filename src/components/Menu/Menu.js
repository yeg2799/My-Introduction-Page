import React from "react";
import {  Row } from "reactstrap";
import "../../style/Menu/menu.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import profilePicture from "../../images/profile.jpg";
import SideBarMenuButton from "./SideBarMenuButton";
const Menu = () => {
  const sliderMenu = () => {
    return (
      <div className="menu">
        <Row>
          <img src={profilePicture} alt="profilresmi"></img>
        </Row>
        <Row className="menu-links">
            <SideBarMenuButton Icon={AiOutlineHome} to="/" title="Anasayfa"/>
            <SideBarMenuButton Icon={AiOutlineHome} to="/hakkimda" title="Hakkımda"/>
            <SideBarMenuButton Icon={AiOutlineHome} to="/projelerim" title="Projelerim"/>
            <SideBarMenuButton Icon={AiOutlineHome} to="/blog" title="Blog"/>
            <SideBarMenuButton Icon={AiOutlineHome} to="/iletisim" title="İletişim"/>
        </Row>

        <Row >sosyal media hesapları</Row>
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
