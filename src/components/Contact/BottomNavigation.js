import React from "react";
import { Link } from "react-scroll";
import "./BottomNavigation.scss";

const BottomNavigation = () => {
  return (
    <section className="bottom-navigation">
      <div className="bottom-left-navigation">
        <ul>
          <li>
            <Link
              to="hero-section"
              smooth={true}
              duration={500}
              className="bottom-nav-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="our-story-section"
              smooth={true}
              duration={500}
              className="bottom-nav-link"
            >
              Our Story
            </Link>
          </li>
          <li>
            <Link
              to="salon-services-section"
              smooth={true}
              duration={500}
              className="bottom-nav-link"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="products-section"
              smooth={true}
              duration={500}
              className="bottom-nav-link"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="news-section"
              smooth={true}
              duration={500}
              className="bottom-nav-link"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="contact-section"
              smooth={true}
              duration={500}
              className="bottom-nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom-right-navigation">
        <ul>
          <li>
            <Link
              to="salon-services-section"
              smooth={true}
              duration={500}
              className="bottom-nav-link"
            >
              Salon Services
            </Link>
          </li>
          <li>
            <Link
              to="spa-services-section"
              smooth={true}
              duration={500}
              className="bottom-nav-link"
            >
              Spa Services
            </Link>
          </li>
          <li>
            <Link
              to="bridal-services-section"
              smooth={true}
              duration={500}
              className="bottom-nav-link"
            >
              Bridal Services
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BottomNavigation;
