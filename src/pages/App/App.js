import React from "react";
import "../../style/App/app.scss";
import { Col, Row } from "reactstrap";
import Menu from "../Menu/Menu";
import Content from "../Content/Content";

const App = () => {
  return (
    <div className="app">
      
      <Row>
        <Col lg="3" style={{ padding:0,margin:0 }}>
          <Menu />
        </Col>
        <Col style={{ padding:0,margin:0 }}>
          <Content />
        </Col>
      </Row>
    </div>
  );
};
export default App;
