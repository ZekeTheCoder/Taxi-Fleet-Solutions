import React from "react";

function Services() {
  return (
    <>
      {/* <section className="services"> */}
      {/* <div className="home-container"> */}

      <h2 className="h2 services-title">We Have Most of Popular services</h2>
      <ul className="services-list">
        {[
          {
            title: "Business Data Analysis",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reiciendis?",
          },
          {
            title: "Income and Expense Tracker",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reiciendis?",
          },
          {
            title: "Human Resource Capital",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reiciendis?",
          },
        ].map((dept, index) => (
          <li key={index}>
            <div className="services-card">
              {/* <a href="#" className="card-banner">
                <figure>
                  <img src={dept.img} alt={dept.title} />
                </figure>
              </a> */}
              <a href="#">
                <h3 className="h3 card-title">{dept.title}</h3>
              </a>
              <p className="card-text">{dept.text}</p>
              <a href="#" className="card-link">
                <span>Learn More</span>
                <ion-icon name="arrow-forward"></ion-icon>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary">View All Services</button>
      {/* </div> */}
      {/* </section> */}
    </>
  );
}

export default Services;
