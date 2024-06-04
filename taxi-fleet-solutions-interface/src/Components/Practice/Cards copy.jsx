import React from "react";
// import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <div className="box">
          <h1>2194</h1>
          <h3>Students</h3>
        </div>
        <div className="icon-case">
          <i className="fas fa-user-graduate"></i>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <h1>53</h1>
          <h3>Teachers</h3>
        </div>
        <div className="icon-case">
          <i className="fas fa-chalkboard-teacher"></i>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <h1>5</h1>
          <h3>Schools</h3>
        </div>
        <div className="icon-case">
          <i className="fas fa-school"></i>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <h1>350000</h1>
          <h3>Income</h3>
        </div>
        <div className="icon-case">
          <i className="fas fa-dollar-sign"></i>
        </div>
      </div>
    </div>
  );
}

export default Cards;
