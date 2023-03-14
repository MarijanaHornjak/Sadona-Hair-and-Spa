import React from "react";
import "./BridalServices.scss";
import BrideIcon from "./BrideIcon";
import ArrowBottom from "../SpaServices/ArrowBottom";
import Floral1 from "../../assets/flowers&leafs/cvet 1.png";
import Leaf2 from "../../assets/flowers&leafs/2.png";

const BridalServices = () => {
  return (
    <section id="bridal-services-section">
      <div className="bridal-services-container">
        <div></div>
        <div className="bridal-details">
          <img src={Floral1} alt="floral" className="bridal-floral" />
          <div className="bridal-icons">
            <BrideIcon />
            <p>Services</p>
          </div>
          <h3>Bridal Services</h3>
          <p>
            We offer full bridal salon & spa services as well as a little
            retreat to prepare and enjoy that memorable “get ready time” with
            family and friends on your most beautiful and special day!
          </p>
          <div className="button-wrapper">
          <button className="bridal-services-button">All Services</button>
          </div>
          <div className="check-out-more">
            <ArrowBottom />
            <p>Check out more</p>
          </div>
          <img src={Leaf2} alt="leaf" className="bridal-leaf" />
        </div>
      </div>
    </section>
  );
};

export default BridalServices;
