import React from "react";
import "./Hero.scss";
import HeaderArrowDown from "../Header/HeaderArrowDown";

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="hero-container">
        <h2>A new type of salon.</h2>
        <h1>A New Type Of Experience</h1>
        <button className="contact-button">Contact</button>
        <div className="hero-slider">
          <button className="hero-arrow hero-arrow-left">
            <HeaderArrowDown />
          </button>
          <div className="number-container">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
          </div>
          <button className="hero-arrow hero-arrow-right">
            <HeaderArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
