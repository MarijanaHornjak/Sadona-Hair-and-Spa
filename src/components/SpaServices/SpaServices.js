import React from "react";
import ArrowBottom from "./ArrowBottom";
import SpaCandle from "./SpaCandle";
import "./SpaServices.scss";

const SpaServices = () => {
  return (
    <section id="spa-services-section">
      <div className="spa-services-container">
        <div className="spa-icons">
          <SpaCandle />
          <p>Services</p>
        </div>
        <h3>Spa Services</h3>
        <p>
          Both an escape and an oasis, the luxurious spa experiences at Sadona
          will leave you feeling soothed, energized and refreshed.
        </p>
        <button className="spa-button">All Services</button>
        <div className="check-out-more">
          <ArrowBottom />
          <p>Check out more</p>
        </div>
      </div>
    </section>
  );
};

export default SpaServices;
