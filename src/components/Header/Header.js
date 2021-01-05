import React from "react";
import { themes } from "../Settings/Settings";
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import "../../style/Header/header.scss";



const Header = ({ toggleTheme, theme, name }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={11}>
          <h1>Yunus Emre Güzel</h1>
        </Grid>
        <Grid item xs={1}>
        <ToggleButton value="check" onClick={toggleTheme} style={{background:"#fff",color:"black",marginTop:"10px"}}>
            {theme === themes.dark ? <Brightness4Icon fontSize="large"/> :<Brightness4OutlinedIcon fontSize="large"/>}
          </ToggleButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
