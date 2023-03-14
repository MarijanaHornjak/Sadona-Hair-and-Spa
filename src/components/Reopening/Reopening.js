import React from "react";
import "./Reopening.scss";
import Leaf3 from "../../assets/flowers&leafs/3.png";
import Leaf2 from "../../assets/flowers&leafs/2.png";
import Flower1 from "../../assets/flowers&leafs/cvet 1.png";

const Reopening = () => {
  return (
    <section className="reopening-section">
      <div className="reopening-container">
        <p className="reopening-title">We are Reopening!</p>
        <p>Check out details about new safety guidelines</p>
        <div className="button-wrapper">
        <button className="reopening-button">Safety Guidelines</button>
        </div>
      </div>
      <img src={Leaf3} alt="leaf" className="reopening-leaf-left" />
      <img src={Leaf2} alt="leaf" className="reopening-leaf-right" />
      <img src={Flower1} alt="flower" className="reopening-flower" />
    </section>
  );
};

export default Reopening;
