import React from "react";
// import "./Homepage/home-style.css";
import Header1 from "./Homepage/Header1";
import CTA from "./Homepage/CTA";
import Footer from "./Homepage/Footer";
import Hero from "./Homepage/Hero";
import About from "./Homepage/About";
import Services from "./Homepage/Services";

function Homepage() {
  return (
    <>
      <header class="header1" data-header>
        <div class="home-container">
          <Header1 />
        </div>
      </header>
      <main>
        <article>
          <section className="hero">
            {/* <div className="home-container"> */}
            <Hero />
            {/* </div> */}
          </section>
          <section className="about">
            <About />
          </section>
          <section className="services">
            <Services />
          </section>
          <CTA />
        </article>

        <Footer />
      </main>
    </>
  );
}

export default Homepage;
