import React from "react";

function CTA() {
  return (
    <>
      <section className="cta">
        {/* <div className="container"> */}
        <div className="title-wrapper">
          <h2 className="h2 cta-title">
            <span>Create Free Account & Get Started</span>
          </h2>
          <button className="btn btn-primary">
            <a href="/register">Register Now</a>
          </button>
        </div>
        <div className="cta-banner"></div>
        {/* </div> */}
      </section>
    </>
  );
}

export default CTA;
