import React from "react";
import "../../style/App/app.scss";
import Menu from "../Menu/Menu";
import Content from "../Content/Content";

const App = () => {
  return (
    <div className="app">
      <Menu/>
      <Content/>
    </div>
  );
};
export default App;
