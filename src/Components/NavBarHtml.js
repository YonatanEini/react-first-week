import {useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React,{Component} from "react";


export class NavBarComponent extends Component {
  state = {
    name: 'UserName'
  };
    componentDidMount() {
    }

    render() {
      return (
        <>
  <meta charSet="UTF-8" />
  <title>Get פטור</title>
  <link rel="stylesheet" href="NavBarStyle.css" />
  <div style={{height: "5vh"}} className="job">
    <div className="header">
      <div className="logo">Get פטור</div>
     
      <div className="header-menu">
        <a  href="#" className="active">
          בחר סוג פטור
        </a>
        <a href="#"> </a>
        <a href="#">צפייה בבקשת פטור</a>
      </div>
      <div className="user-settings">
        <div onClick = {this.darkModeClick} className="dark-light">
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </div>
        <div className="user-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-square"
          >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
          </svg>
        </div>
        <img
          className="user-profile"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
          alt=""
        />
        <div className="user-name">{this.state.name}</div>
      </div>
    </div>
   
    </div>
  {/* partial */}
</>

      );
    }
    copyTextArea(){
      var element = document.getElementById("NameArea")
      console.log(element.value)
    }
    darkModeClick(){
      const toggleButton = document.querySelector(".dark-light");
      document.body.classList.toggle("dark-mode");
      console.log(toggleButton)
    }
}