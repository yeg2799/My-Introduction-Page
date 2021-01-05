import React, { useContext } from "react";
import { themes } from "../App/App";
import { IoCloudyNight, IoCloudyNightOutline } from "react-icons/io5";
import "../../style/Header/header.scss";
const Header = ({ toggleTheme, theme, name }) => {
  return (
    <>
      <div className="col-8">{name}</div>
      <div className="col-4 mt-3">
        <div className="modes">
          <a onClick={toggleTheme} className="mode-button">
            {theme === themes.dark ? (
              <IoCloudyNightOutline />
            ) : (
              <IoCloudyNight />
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
