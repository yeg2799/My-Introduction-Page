import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Content from "../PartCenter/Content";
import About from "../PartCenter/About";
import Footer from "../Footer/Footer";
import "../../style/App/app.scss";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {themes,ThemeContext} from '../Settings/Settings'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const [name, setName] = useState("Emre");
  const [theme, setTheme] = useState(themes.dark);
  const classes=useStyles();
  const toggleTheme=()=>{
    if(theme===themes.dark){
      setTheme(themes.light);
    }
    else{
      setTheme(themes.dark);
    }
  }

  return (
    <ThemeContext.Provider value={theme} >
    <div style={theme}>
      
         <CssBaseline />
         <Container maxWidth="lg" >
         <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header toggleTheme={toggleTheme} name={name} theme={theme}/>
        </Grid>
        <Grid item xs={12}>
          <Menu/>
        </Grid>
        <Grid item xs={8}>
          <Content/>
        </Grid>
        <Grid item xs={4}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
         </Container>
         
    </div>
    </ThemeContext.Provider>
  );
};
export default App;
