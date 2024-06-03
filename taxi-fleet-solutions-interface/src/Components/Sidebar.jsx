import React from "react";
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
            <i className="fas fa-tachometer-alt"></i>&nbsp;{" "}
            <span>Dashboard</span>
          </li>
          <li>
            <i className="fas fa-user"></i>&nbsp; <span>Customers</span>
          </li>
          <li>
            <i className="fas fa-id-card"></i>&nbsp; <span>Drivers</span>
          </li>
          <li>
            <i className="fas fa-van-shuttle"></i>&nbsp;<span>Vehicles</span>
          </li>
          <li>
            <i className="fas fa-plus"></i>&nbsp;<span>Income</span>
          </li>
          <li>
            <i className="fas fa-minus"></i>&nbsp;<span>Expense</span>
          </li>
          <li>
            <i className="fas fa-question-circle"></i>&nbsp; <span>Help</span>
          </li>
          <li>
            <i className="fas fa-cog"></i>&nbsp;<span>Settings</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
