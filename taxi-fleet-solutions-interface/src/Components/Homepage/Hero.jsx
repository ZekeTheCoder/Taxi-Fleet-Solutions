import React from "react";

function Hero() {
  return (
    <>
      <section className="hero">
        {/* <div className="container"> */}
        <figure className="hero-banner">
          <img
            //   src="src\Components\Homepage\assets\images\hero-banner.png"
            src="src\assets\toyota-quantum-2-5d-4d-gl-14-seater-bus-2017-id-46518975-type-main.jpg"
            alt="picture1."
          />
        </figure>

        <div className="hero-content">
          <h1 className="h1 hero-title">
            Kick Start your Taxi business with realtime and up to date data
            analysis
          </h1>
          <p className="section-text">
            date income, expense and salary calculatios using the latest machine
            learning technologies
          </p>
          <button className="btn btn-primary">Discover More</button>
        </div>
        {/* </div>*/}
      </section>
    </>
  );
}

export default Hero;
