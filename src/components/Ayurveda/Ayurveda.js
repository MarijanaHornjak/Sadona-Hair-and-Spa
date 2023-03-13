import React from "react";
import "./Ayurveda.scss";
import Floral1 from "../../assets/flowers&leafs/cvet 1.png";
import Leaf2 from "../../assets/flowers&leafs/2.png";

const Ayurveda = () => {
  return (
    <section className="ayurveda-section">
      <div className="ayurveda-container">
        <img src={Floral1} alt="floral" className="ayurveda-floral" />
        <div className="ayurveda-line upper-line"></div>
        <p className="ayurveda-main-text">
          Sadona Salon + Spa was inspired around Ayurvedic principles.
        </p>
        <p className="ayurveda-small-text">
          The belief that health and wellness occur when there is true balance
          between the mind, body and spirit.
        </p>
        <div className="ayurveda-line bottom-line"></div>
        <img src={Leaf2} alt="leaf" className="ayurveda-leaf" />
      </div>
    </section>
  );
};

export default Ayurveda;
