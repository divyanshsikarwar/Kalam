import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image'
import {Navbar, Nav, Form, Dropdown, DropdownButton} from "react-bootstrap"
import logo from './feather.png';


function Header(props) {
    if(props.mx){
      return (<>

        <div class="custom-navbar">
     
        <div class="brand-logo">
        
        <img id="LOGO" src={logo} alt="Logo" href="/home" width="10%"/>
          </div>
  
        <div class="navbar-links">
            <ul>
              <li class="dowwn"><a href="/home" >Home</a></li>
              <li class="dowwn"><a href="/createnew"  >New Document</a></li>
              <li class="dowwn"><a href="/opendocument"  >Open Document</a></li>
              <li class="dowwn" id="aboutus"><a href="/404"  >About Us</a></li>
            </ul>
        </div>
  
    </div></>
      )
    }
    return (<>

      <div class="custom-navbar">
   
      <div class="brand-logo">
      
      <img id="LOGO" src={logo} alt="Logo" href="/home" width="10%"/>
        </div>

      <div class="navbar-links">
          <ul>
            <li class="dowwn"><a href="/home" >Home</a></li>
            <li class="dowwn"><a href="/createnew"  >New Document</a></li>
            <li class="dowwn"><a href="/opendocument"  >Open Document</a></li>
            <li class="dowwn" id="aboutus"><a href="/404"  >About Us</a></li>
          </ul>
      </div>

  </div></>
    )
}

export default Header;


