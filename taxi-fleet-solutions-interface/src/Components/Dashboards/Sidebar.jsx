import React from "react";
import { Link, NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Sidebar() {
  return (
    <>
      <div className="side-menu">
        <div className="brand-name">
          <h1>Taxi Fleet Solutions</h1>
        </div>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              <i className="fas fa-tachometer-alt"></i>&nbsp;{" "}
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/customer">
              <i className="fas fa-user"></i>&nbsp; <span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/driver">
              <i className="fas fa-id-card"></i>&nbsp; <span>Drivers</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/salary">
              <i className="fas fa-money-bill"></i>&nbsp;<span>Salary</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/vehicle">
              <i className="fas fa-van-shuttle"></i>&nbsp;<span>Vehicles</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/income">
              <i className="fas fa-plus"></i>&nbsp;<span>Income</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/expense">
              <i className="fas fa-minus"></i>&nbsp;<span>Expense</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/help">
              <i className="fas fa-question-circle"></i>&nbsp; <span>Help</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/settings">
              <i className="fas fa-cog"></i>&nbsp;<span>Settings</span>
            </NavLink>
          </li>
          <li>
            <a href="/" class="logout">
              <i class="fas fa-sign-out-alt"></i>
              <span class="nav-item">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
