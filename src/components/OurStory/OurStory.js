import React from "react";
import "./OurStory.scss";

const OurStory = () => {
  return (
    <section id="our-story-section">
      <div className="our-story-container">
        <span className="our-story-upper-line"></span>
        <p className="our-story-main-text">
          Sadona was conceived with the belief that a salon and spa should be a
          welcome and tranquil experience.
        </p>
        <p className="our-story-small-text">
          And from the moment you walk through our door, you will see exactly
          what we mean. Come, let's look around together.
        </p>
        <button className="our-story-button">Our story</button>
        <span className="our-story-down-line"></span>
      </div>
    </section>
  );
};

export default OurStory;
