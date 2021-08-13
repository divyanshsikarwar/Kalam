import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Front from "./FrontEnd/Front"
import Home from "./FrontEnd/home"
import Notfound from "./FrontEnd/404"
import Didyoumean from "./FrontEnd/didyoumean"
import reportWebVitals from './reportWebVitals';
import Newfile from "./FrontEnd/createnew"
import Openfile from "./FrontEnd/open"
import axios from "axios"
import {Route, BrowserRouter as Router, Redirect} from "react-router-dom"
var crypto = require("crypto");


/*
function imhere() {
  console.log("-----------")
  axios.post("http://localhost:3002/newfile",{"id":id})
}
function bye() {
  console.log("-----------------------------------")
  axios.post("http://localhost:3002/exitfile",{"id":id})
}
*/


function random(){
  var id = crypto.randomBytes(20).toString('hex');
  return id;
}
<Redirect to = {`/file/${random()}`} />

ReactDOM.render(

  <Router>
  <switch> 
    <Route path="/" exact> 
    <Home />
    </Route>

    <Route path="/home" exact> 
      <Home />
    </Route>
    <Route path="/createnew" exact> 
      <Newfile />
    </Route>
    <Route path="/opendocument" exact> 
      <Openfile />
    </Route>


    <Route path ="/file/:id" >
      <App />
    </Route>

    <Route path ="/file:id" >
      <Notfound />
    </Route>

    <Route path ="/404" exact >
      <Notfound />
    </Route>

    <Route path ="/readmore" exact>
      <Notfound />
    </Route>

    <Route path ="/[:id]" exact>
    <Notfound />
    </Route>

    <Route path ="/file/[:id]" exact>
      <Notfound />
    </Route>

    <Route path ="/file" exact>
      <Notfound />
    </Route>

    <Route path ="/files" >
      <Didyoumean />
    </Route>


  </switch>
  </Router>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
