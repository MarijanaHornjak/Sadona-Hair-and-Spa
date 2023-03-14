import React from "react";
import "./Contact.scss";
import SadonaLogo from "../../assets/icons/image-asset1.png";
import PhoneIcon from "./PhoneIcon";
import LetterIcon from "./LetterIcon";
import LocationIcon from "./LocationIcon";
import TimeIcon from "./TimeIcon";
import FacebookIcon from "../Hero/FacebookIcon";
import InstagramIcon from "../Hero/InstagramIcon";
import BottomNavigation from "./BottomNavigation";

const Contact = () => {
  return (
    <section id="contact-section">
      <div className="contact-container">
        <img src={SadonaLogo} alt="logo" className="sadona-logo" />
        <div className="contact-information">
          <h3>We'd love to hear from you.</h3>
          <div className="contact-details">
            <div className="contact-number">
              <PhoneIcon />
              <p>(410) 263-1515</p>
            </div>
            <div className="contact-email">
              <LetterIcon />
              <p>info@mysadona.com</p>
            </div>
            <div className="contact-location">
              <LocationIcon />
              <p>15 West Street Annapolis, MD 21401</p>
            </div>
          </div>
          <div className="hours-details">
            <div className="hours-title">
              <TimeIcon />
              <h5>Hours of Operation</h5>
            </div>
            <div className="open-days">
              <p>
                Monday - Tuesday: 11am - 7pm Wednesday - Friday: 9am - 7pm
                Saturday: 8am - 4pm Sunday: 10am - 4pm
              </p>
            </div>
          </div>
          <div className="follow-section">
            <h5>Follow us</h5>
            <div className="social-media-icons">
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
        <BottomNavigation />
      </div>
    </section>
  );
};

export default Contact;
