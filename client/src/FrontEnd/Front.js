import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import Createfile from "./createnew"
import "./404.css"
import './front.css';


function Front() {
    return (
        <>
        <div class="stars">
        <Header />
        <div class="central-body" >
     
        <div class="objects">
        <div class="earth-moon">
        <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"></img>
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"></img>
                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"></img>
                </div></div>
        <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>

                </div></div></div>

        </>
)}

export default Front;