import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image'
import Header from "./Header"
import axios from 'axios'
import {Navbar, Nav, Form, Dropdown, Button, DropdownButton, Container, Row, Col,
    InputGroup,FormControl } from "react-bootstrap"
import InputGroupWithExtras from 'react-bootstrap/esm/InputGroup';
var cookies = require('cookie');
var IDavailable = ""
var Password = ""
var DocID= ""
const PORT = process.env.PORT || 5000;
const crypto = require('crypto');
var hash = crypto.getHashes();


function userurl() {
    var url = document.getElementById("myinput")
    var inputurl = document.getElementById("basic-url")
    var ava = document.getElementById("availability")
    var xy = inputurl.value;
    url.value="www.FilesOP.com/file/" + xy.split(' ').join('')
    var avabtn = document.getElementById("button-validate")

    avabtn.style.backgroundColor="#FFCB39"

    if(xy.length===0){
      avabtn.style.backgroundColor="grey"
      ava.style.display="none"
      IDavailable = false;
    }
}

async function btnvalidate() {
    var x = document.getElementById("basic-url").value
    var ava = document.getElementById("availability")
    if(x===""){
      ava.style.display="block"
      ava.style.setProperty("color", "red", "important");
      ava.innerText="Document ID Cannot be Empty"
      return
    }
    const response = await axios.post("/check",{ID: x});
    
      IDavailable = await response.data.ans;

      if(IDavailable === false){
        ava.style.display="block"
        ava.style.setProperty("color", "red", "important");
        ava.innerText="Document ID Not Available"
      }
      else if(IDavailable === true){
        ava.style.display="block"
        ava.innerText="Document ID Available"
        ava.style.setProperty("color", "rgb(34, 180, 34)", "important");
      }
  
  }

  function random() {

    var url = document.getElementById("myinput")
    var inputurl = document.getElementById("basic-url")
    var id = crypto.randomBytes(20).toString('hex');
    url.value= "www.FilesOP.com/file/" + id
    inputurl.value = id
}

function copy() {
    /* Get the text field */
    var copyText = document.getElementById("myinput") ;
     copyText.select();
    document.execCommand("copy");
  
  }

  function adminpass() {
    
    var text = document.getElementById("adminpass") ;
    var x = document.getElementById("adminpassword");
    if (x.type === "password") {
        x.type = "text";
        text.innerText = "Hide"
      } else {
        x.type = "password";
        text.innerText = "View"
      }
}

function passvalidate() {
    document.getElementById("pass-prompt1").style.display="block"
    document.getElementById("pass-prompt2").style.display="none"
    var pass = document.getElementById("adminpassword").value
    var confpass = document.getElementById("confirmpassword").value
    if(pass === confpass){
      document.getElementById("pass-prompt1").style.display="none"
      document.getElementById("pass-prompt2").style.display="block"
    }
    if(confpass.length===0){
      document.getElementById("pass-prompt1").style.display="none"
      document.getElementById("pass-prompt2").style.display="none"
    }
  }

  function open() {
    var file = document.getElementById("createfile");
    file.style.display="none"
    var file2 = document.getElementById("openfile");
    file2.style.display="block"
  }















async function finalcreate() {
    var pass = document.getElementById("adminpassword").value
    var confpass = document.getElementById("confirmpassword").value
  
    await btnvalidate()
    if(IDavailable===false){
      document.getElementById("prompt1").style.display="block"
      return
    }
    else{
      document.getElementById("prompt1").style.display="none"
    }
  
    if(pass.length>0 && confpass.length>0){
      if(pass === confpass){
        Password = pass
        document.getElementById("prompt2").style.display="none"
        document.getElementById("final-btn").style.backgroundColor="rgba(1,122,254,255)"
        DocID =  document.getElementById("basic-url").value
        //d---------------
        var vp = Math.random().toString(36).slice(2)
        axios.post("/insert",{
          "DocID" : DocID,
          "Password" : crypto.createHash('sha1').update(Password).digest('hex'),
          "Viewer_Password": crypto.createHash('sha1').update(vp).digest('hex'),
          "V_P" : vp
        });
        
        sessionStorage.ID = DocID + ";" + crypto.createHash('sha1').update(Password).digest('hex') + ";Admin"
        window.open("file/"+DocID ,"_self")
      }
      else{
        document.getElementById("final-btn").style.backgroundColor="red"
      }
    }
    else{
      document.getElementById("prompt2").style.display="block"
      document.getElementById("final-btn").style.backgroundColor="red"
    }
  }


function Createfile(){
    return <div id = "openbg"> 
        <Header />
      <div id="particles-js"></div>
  <div class="objects" >
          <div class="earth-moon">
          <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"></img>
                      <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"></img>
                      <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"></img>
            </div></div>
    <div id="createbgt"></div>
    <div Style="z-index: 10000;">
    <div Style="margin-top: -5px">
  <Container fluid id="createfile">
    <Row>

      <Col>
      <h3 class="open-heading">Create a New Document</h3>
      <Form>

      <Form.Label className="headings">Choose Your Custom Document ID*</Form.Label>
      <Form.Text className="text-muted" >
      There are chances your custom doc id might not be available.
    </Form.Text>


    <InputGroup className="mb-3" id="desiredid">
    
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        www.FilesOP.com/file/
      </InputGroup.Text>
    </InputGroup.Prepend>
    
    <FormControl id="basic-url" aria-describedby="basic-addon3" onChange={userurl} />
    
  </InputGroup>

  <Form.Text className="text-muted" id="availability">
    Document ID Not Available.
    </Form.Text>

  <Button variant="primary"  id="button-validate" onClick={btnvalidate}>
    Check Availability
  </Button>
  <Button variant="primary" id="button-createfile" className="butt" onClick={random}>
    Generate Random
  </Button>

<br></br>
  <Form.Label className="headings">Your Document ID :</Form.Label>
  <InputGroup className="mb-3" >
    <FormControl 
      value="www.FilesOP.com/file/" id="myinput" />
      <InputGroup.Append>
  <Button variant="primary" className="butt"  onClick={copy}>Copy</Button>
    </InputGroup.Append>
    
    
  </InputGroup>
  <Form.Text className="text-muted" class="formtexxt">
      We'll never share your Document ID with anyone else.
    </Form.Text>





    <Form.Label className="headings">Admin Password</Form.Label>
    <InputGroup className="mb-3" >
    
    <FormControl placeholder="Admin's Password"
      type="password" id="adminpassword" />
      <InputGroup.Append>
  <Button variant="primary" onClick={adminpass} className="butt" id ="adminpass">View</Button>
    </InputGroup.Append>
    </InputGroup>



    <Form.Label className="headings">Confirm Admin Password</Form.Label>
    <InputGroup className="mb-3" >
    
    <FormControl placeholder="Confirm Admin's Password"
      type="password" id="confirmpassword" onChange={passvalidate}/>

    </InputGroup>

  <h6 id="pass-prompt1" class="prompt">Password and Confirm Password did not match.</h6>
  <h6 id="pass-prompt2" class="prompt">Password and Confirm Password matched.</h6>
  <h6 id="prompt1" class="prompt">Your choosen custom ID is NOT Available.<br></br>Use "Check Availability" to know if an ID is available.</h6>
  <h6 id="prompt2" class="prompt">Seems like you have not entered a password.</h6>
  <Button variant="primary"  onClick={finalcreate} id="final-btn" className="butt" Style="width: 100%">
    Create Document
  </Button>
  <h1 class="open-heading" id="---">--------</h1>
  <Button href = "/opendocument"variant="outline-primary" id="orbtn" >Open Existing Document</Button>

</Form>
      </Col>
    </Row>
  </Container>
  </div>

  </div>
  </div>
}


export default Createfile;