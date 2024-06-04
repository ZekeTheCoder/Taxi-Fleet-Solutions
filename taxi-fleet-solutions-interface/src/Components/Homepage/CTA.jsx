import React from "react";
// import "./style.css";

function CTA() {
  return (
    <>
      <section className="cta">
        {/* <div className="container"> */}
        <div className="title-wrapper">
          <h2 className="h2 cta-title">
            <span>Create Free Account & Get Register</span>
            {/* <img
              src="./assets/images/cta-vector.svg"
              alt="Vector arrow art"
              className="vector-line"
            /> */}
          </h2>
          <button className="btn btn-primary">Register Now</button>
        </div>
        <div className="cta-banner"></div>
        {/* </div> */}
      </section>
    </>
  );
}

export default CTA;
