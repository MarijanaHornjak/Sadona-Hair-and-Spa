import React from "react";
import "./Help.scss";
import HelpIcon from "./HelpIcon";
import Floral1 from "../../assets/flowers&leafs/cvet 1.png";
import Leaf3 from "../../assets/flowers&leafs/3.png";

const Help = () => {
  return (
    <section className="help-section">
      <div className="help-container">
        <img src={Floral1} alt="floral" className="help-floral" />
        <div className="help-icons">
          <HelpIcon />
          <p>FAQ's</p>
        </div>
        <div className="help-text">
          <h3>How Can We Help You?</h3>
          <button>Recently Asked Questions</button>
        </div>
        <img src={Leaf3} alt="leaf" className="help-leaf" />
      </div>
    </section>
  );
};

export default Help;
