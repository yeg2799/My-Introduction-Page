import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {BsFillPersonFill} from 'react-icons/bs'
const Contact = () => {
    return (
        <div style={{paddingTop:"50px"}}>
           <h1 style={{textAlign:"center"}}>İletişim</h1> 
           <Form style={{width:"50%",margin:"50px auto"}}>
      <Row form >
        <Col md={6}>
          <FormGroup>
            <Input type="text"  placeholder="&#x212B;Adınız" />
            
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input type="text"  placeholder="Soyadınız" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input type="text"  placeholder="Email"/>
      </FormGroup>
      <FormGroup>
        <Input type="textarea"  placeholder="Adresinizi giriniz" style={{height:"200px"}}/>
      </FormGroup>
     
     
      <Button style={{width:"100%"}}>Sign in</Button>
    </Form>
        </div>
    )
}

export default Contact
