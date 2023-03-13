import React from "react";
import "./SaltServices.scss";
import SaltServicesImage from "../../assets/images/3093620.png";
import SaltIcon from "./SaltIcon";
import Floral2 from "../../assets/flowers&leafs/cvet 2.png";
import Leaf3 from "../../assets/flowers&leafs/3.png";

const SaltServices = () => {
  return (
    <section className="salt-services-section">
      <div className="salt-services-container">
        <div className="salt-text-container">
          <img src={Floral2} alt="floral" className="salt-section-floral" />
          <div className="salt-icon-container">
            <SaltIcon />
            <p>Services</p>
          </div>
          <h3>Salt</h3>
          <p>
            Salt possesses wonderful healing and rejuvenation properties.
            Indulge in one of our salt treatments and experience strength and
            vitality from one of nature's most ancient forms of therapy.
          </p>
          <img src={Leaf3} alt="leaf" className="salt-section-leaf" />
        </div>
        <img
          src={SaltServicesImage}
          alt="salt-therapy"
          className="salt-services-image"
        />
      </div>
    </section>
  );
};

export default SaltServices;
