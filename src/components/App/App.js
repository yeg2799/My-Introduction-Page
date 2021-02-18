import React, {useState} from "react";
import "../../style/App/app.scss";
import { Col, Container, Row } from 'reactstrap';
import Menu from "../Menu/Menu";
import HomePage from "../Content/HomePage";
import Content from "../Content/Content";

const App = () => {
  return (
    <React.Fragment>
      
        <Row style={{width:"100%"}}>
          <Col xs="3"><Menu/></Col>
          <Col xs="9"><Content></Content></Col>
        </Row>
      
    </React.Fragment>
  );
};
export default App;
