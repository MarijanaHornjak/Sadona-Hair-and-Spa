import React from "react";
import "./SalonServices.scss";
import SalonGirl from "../../assets/images/1788.png";
import SalonHair from "../../assets/images/pexels-engin-akyurt-3065209.png";
import SalonIcon from "./SalonIcon";
import Flower2 from "../../assets/flowers&leafs//cvet 2.png";
import Leaf3 from "../../assets/flowers&leafs/3.png";

const SalonServices = () => {
  return (
    <section id="salon-services-section">
      <div className="salon-services-container">
        <div className="salon-services-text">
          <div className="salon-icon-container">
            <SalonIcon />
            <p>Services</p>
          </div>
          <h3>Salon Services</h3>
          <p>
            Our salon is a forward-thinking studio with experts that understand
            your individuality and specialize in your unique beauty.
          </p>
        </div>
        <div className="salon-services-images">
          <img src={SalonGirl} alt="salon-girl" className="salon-girl" />
          <img src={SalonHair} alt="hair" className="salon-hair" />
        </div>
      </div>
    </section>
  );
};

export default SalonServices;
