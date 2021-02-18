import React, {useState} from "react";
import "../../style/App/app.scss";
import { Col, Container, Row } from 'reactstrap';
import Menu from "../Menu/Menu";
import HomePage from "../Content/HomePage";
import Content from "../Content/Content";
const App = () => {
  return (
    <React.Fragment>
      
        <Row>
          <Col xs="2"><Menu/></Col>
          <Col xs="10"><Content></Content></Col>
        </Row>
      
    </React.Fragment>
  );
};
export default App;
