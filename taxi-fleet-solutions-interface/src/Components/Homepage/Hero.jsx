import React from "react";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-banner">
            <img
              //   src="src\Components\Homepage\assets\images\hero-banner.png"
              src="src\assets\toyota-quantum-2-5d-4d-gl-14-seater-bus-2017-id-46518975-type-main.png"
              alt="picture1."
            />
          </div>

          <div className="hero-content">
            <h1 className="h1 hero-title">Taxi Fleet Solutions</h1>
            <p className="section-text">
              Kick Start your Taxi business with realtime
              <br />
              and up to date data analysis. Income, expense and salary
              calculatios using the latest machine learning technologies
            </p>
            {/* <button className="btn btn-primary">Discover More</button> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
