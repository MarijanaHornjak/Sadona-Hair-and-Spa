import React from "react";
import { Link } from "react-scroll";

import HeaderLogo from "../../assets/images/image-asset.png";
// import Hero from "../Hero/Hero";
import "./Header.scss";
import HeaderArrowDown from "./HeaderArrowDown";

const Header = () => {
  return (
    <header>
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
            <Link to="/ourstory" className="nav-links">
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
            <Link to="/products" className="nav-links">
              Products
            </Link>
          </li>
          <li>
            <Link to="/news" className="nav-links">
              News
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;