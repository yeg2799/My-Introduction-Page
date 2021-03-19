import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {BsFillPersonFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import '../../style/Content/contact.scss'
const Contact = () => {
    return (
        <div  className="contact">
           <h1 style={{textAlign:"center"}}>İletişim</h1> 
           <Form  className="form">
      <div form className="inputs">
        <div  className="inputName">
          <FormGroup className="inputWithIcon">
            <Input type="text"  placeholder="Adınız" />
              <BsFillPersonFill className="icon"/>
          </FormGroup>
        </div>
        <div className="inputSurname">
          <FormGroup className="inputWithIcon">
            <Input type="text"  placeholder="Soyadınız" />
            <BsFillPersonFill className="icon"/>
          </FormGroup>
        </div>
      </div>
      <FormGroup  className="inputWithIcon">
        <Input type="text"  placeholder="Email"/>
        <GrMail className="icon"/>
      </FormGroup>
      <FormGroup>
        <Input type="textarea"  placeholder="Adresinizi giriniz" style={{height:"200px"}}/>
      </FormGroup>
      <Button style={{width:"100%",background:"#E48686",border:"0px",color:"#000",fontSize:"20px"}}>Gönder</Button>
    </Form>
        </div>
    )
}

export default Contact
