import React, { useContext } from "react";
import { themes } from "../App/App";
import { IoCloudyNight, IoCloudyNightOutline } from "react-icons/io5";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import "../../style/Header/header.scss";
const Header = ({ toggleTheme, theme, name }) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <ToggleButton value="check" onClick={toggleTheme}>
            {theme === themes.dark ? <IoCloudyNightOutline/> : <IoCloudyNight/>}
          </ToggleButton>
        </Grid>
        <Grid item xs={4}>
          {name}
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
