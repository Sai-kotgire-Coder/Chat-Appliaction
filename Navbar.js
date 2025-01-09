import React from 'react'
import PropTypes from 'prop-types'
import  { useState } from "react";

export default function Navbar(props) {
   const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  // const [btntext, setBtntext] = useState("enable dark mode");
  const togglemode = () => {
    console.log("clicked");
    console.log(mystyle.color)
    if (mystyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid white",
      });
      // setBtntext("enable light mode ");
    } else {
      setMystyle({ color: "black", backgroundColor: "white" });
      // setBtntext("enable dark mode ");
    }
  };
  return (
    <div style={mystyle}>
       <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.btn1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="About.js">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={togglemode}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>
            </form>
          </div>
        </div>
      </nav>
       </>
    </div>
  )
}
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    btn1 : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title:"My Website", 
    btn1 :"Home Page" 
};