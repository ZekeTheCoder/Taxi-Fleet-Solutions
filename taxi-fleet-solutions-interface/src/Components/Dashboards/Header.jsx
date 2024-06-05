import React from "react";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="nav">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="user">
            <a href="#" className="btn">
              Add New
            </a>
            <i className="fas fa-bell"></i>
            <div className="img-case">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
