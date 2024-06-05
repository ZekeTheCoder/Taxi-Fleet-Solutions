import React from "react";
// import './Cards.css';

function Cards() {
  const dummyData = [
    {
      id: 1,
      count: 200,
      label: "Customers",
      iconClass: "fas fa-user",
    },
    {
      id: 2,
      count: 5,
      label: "Drivers",
      iconClass: "fas fa-id-card",
    },
    { id: 3, count: 5, label: "Vehicles", iconClass: "fas fa-van-shuttle" },
    { id: 4, count: 350000, label: "Income", iconClass: "fas fa-plus" },
    { id: 4, count: 350000, label: "Expense", iconClass: "fas fa-minus" },
  ];

  return (
    <div className="cards">
      {dummyData.map((card) => (
        <div className="card" key={card.id}>
          <div className="box">
            <h1>{card.count}</h1>
            <h3>{card.label}</h3>
          </div>
          <div className="icon-case">
            <i className={card.iconClass}></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
