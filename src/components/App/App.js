import React from "react";
import "../../style/App/app.scss";
import { Col, Row } from "reactstrap";
import Menu from "../Menu/Menu";
import Content from "../Content/Content";

const App = () => {
  return (
    <div className="app">
      <Row>
      <Col xs="3" style={{paddingLeft:"0px",paddingRight:"0px"}}>
          <Menu />
        </Col>
        <Col xs="9" style={{paddingLeft:"0px",paddingRight:"0px"}}>
          <Content/>
        </Col>
      </Row>
        
     
    </div>
  );
};
export default App;
