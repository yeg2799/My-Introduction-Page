import React from "react";
import { Link } from "react-router-dom";
import { Button, Row } from "reactstrap";
import "../../style/Menu/menu.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import profilePicture from "../../images/profile.jpg";
const Menu = () => {
  const sliderMenu = () => {
    return (
      <div className="menu">
        <Row>
          <img src={profilePicture} alt="profilresmi"></img>
        </Row>
        <Row className="menu-links">
          <Button className="menu-button">
            <AiOutlineHome style={{color:"#13285E"}}/>
            <Link to="/" style={{color:"#13285E",textDecoration:"none"}}>Anasayfa</Link>
          </Button>
          <Button className="menu-button">
            <Link to="/hakkimda" style={{color:"#13285E",textDecoration:"none"}}>Hakkımda</Link>
          </Button>
          <Button className="menu-button">
            <Link to="/projelerim" style={{color:"#13285E",textDecoration:"none"}}>Projelerim</Link>
          </Button>
          <Button className="menu-button">
            <Link to="/blog" style={{color:"#13285E",textDecoration:"none"}}>Blog</Link>
          </Button>
          <Button className="menu-button">
            <Link to="/iletisim" style={{color:"#13285E",textDecoration:"none"}}>İletişim</Link>
          </Button>
        </Row>

        <Row>sosyal media hesapları</Row>
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
