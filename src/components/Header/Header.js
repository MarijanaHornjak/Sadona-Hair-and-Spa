import React from "react";
import { Link } from "react-scroll";

import HeaderLogo from "../../assets/images/image-asset.png";
// import Hero from "../Hero/Hero";
import "./Header.scss";
import HeaderArrowDown from "./HeaderArrowDown";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <nav className="nav-left">
          <ul>
            <li>
              <Link
                to="hero-section"
                smooth={true}
                duration={500}
                className="nav-links"
              >
                Home
              </Link>
            </li>
            <li className="our-story">
              <Link
                to="our-story-section"
                smooth={true}
                duration={500}
                className="nav-links"
              >
                Our Story
              </Link>
            </li>
            <li className="services">
              <Link to="/services" className="nav-links">
                Services
                <HeaderArrowDown />
              </Link>
            </li>
          </ul>
        </nav>
        <img src={HeaderLogo} alt="header-logo" className="header-logo" />
        <nav className="nav-right">
          <ul>
            <li>
              <Link
                to="products-section"
                smooth={true}
                duration={500}
                className="nav-links"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="news-section"
                smooth={true}
                duration={500}
                className="nav-links"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="contact-section"
                smooth={true}
                duration={500}
                className="nav-links"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
