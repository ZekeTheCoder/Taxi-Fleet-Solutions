import React from "react";
import "./style.css";

function Header1() {
  return (
    <>
      {/* <div className="header" data-header> */}
      {/* <div className="home-container"> */}
      <div className="overlay" data-overlay></div>
      <a href="#" className="logo">
        <img src="./assets/images/logo.svg" alt="TFS logo" />
      </a>
      <button className="menu-open-btn" data-menu-open-btn>
        <ion-icon name="menu-outline"></ion-icon>
      </button>
      <nav className="navbar" data-navbar>
        <button className="menu-close-btn" data-menu-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <a href="#" className="logo">
          <span>TFS</span>
          {/* <img src="./assets/images/logo.svg" alt="TFS logo" /> */}
        </a>
        <ul className="navbar-list">
          <li>
            <a href="#" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
        <button className="btn btn-secondary">Get Started</button>
      </nav>
      {/* </div> */}
    </>
  );
}

export default Header1;
