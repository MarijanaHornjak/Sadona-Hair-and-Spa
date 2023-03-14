import React from "react";
import "./Hero.scss";
import HeaderArrowDown from "../Header/HeaderArrowDown";
import Flower1 from "../../assets/flowers&leafs/cvet 1.png";
import Leaf1 from "../../assets/flowers&leafs/3.png";
import Flower2 from "../../assets/flowers&leafs/cvet 2.png";
import Leaf2 from "../../assets/flowers&leafs/2.png";
import Leaf3 from "../../assets/flowers&leafs/4.png";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="hero-container">
        <h2>A new type of salon.</h2>
        <h1>A New Type Of Experience</h1>
        <div className="button-wrapper">
          <button className="contact-button">Contact</button>
        </div>
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
        <img src={Flower1} alt="cvet1" className="flower-1" />
        <img src={Flower1} alt="cvet1" className="flower-1-small" />
        <img src={Leaf1} alt="list1" className="leaf-1" />
        <img src={Flower2} alt="cvet2" className="flower-2" />
        <img src={Leaf2} alt="list2" className="leaf-2" />
        <img src={Leaf3} alt="list3" className="leaf-3" />

        <div className="social-media">
          <FacebookIcon />
          <InstagramIcon />
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
