import React,{useState} from "react";
import Grid from "@material-ui/core/Grid";
import "../../style/Header/header.scss";
import Switch from "react-switch";


const Header = ({ toggleTheme, theme, name }) => {
  const [checked,setChecked]=useState(false);
  const handleChange=()=>{
      toggleTheme();
      checked===false?   setChecked(true): setChecked(false);
  }
  return (
    <>
      <Grid container style={{marginTop:"30px"}}>
        <Grid item xs={11}>
          <h1>{name}</h1>
        </Grid>
        <Grid item xs={1}>
       <Switch  onChange={handleChange} checked={checked}></Switch>
       
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
