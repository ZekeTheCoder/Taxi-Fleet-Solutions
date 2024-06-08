import React from "react";
// import "./home-style.css";
function Header1() {
  return (
    <>
      {/* <div className="header1" data-header> */}
      <div className="home-container">
        <div className="overlay" data-overlay></div>
        <a href="#" className="logo">
          <img src="src\assets\logo_TFS.jpg" /*alt="TFS logo"*/ />
          <h1>TFS</h1>
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
                Services
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="header-btn">
            <button className="btn btn-secondary">
              <a href="/register">Register</a>
            </button>
            <button className="btn btn-secondary">
              <a href="/login">Login</a>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header1;
