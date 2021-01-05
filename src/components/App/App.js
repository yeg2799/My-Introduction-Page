import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Content from "../PartCenter/Content";
import About from "../PartCenter/About";
import Footer from "../Footer/Footer";
import "../../style/App/app.scss";

export const themes = {
  dark: {
    background: "#000",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};
export const ThemeContext = React.createContext(themes.dark);
const App = () => {
  const [name, setName] = useState("Emre");
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme=()=>{
    if(theme===themes.dark){
      setTheme(themes.light);
    }
    else{
      setTheme(themes.dark);
    }
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div className="container" style={theme}>
          <div className="row">
            <Header toggleTheme={toggleTheme} theme={theme} name={name}/>
          </div>
          <div className="row">
            <Menu />
          </div>
          <div className="row">
            <div className="col-8">
              <Content />
            </div>
            <div className="col-4">
              <About />
            </div>
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};
export default App;
