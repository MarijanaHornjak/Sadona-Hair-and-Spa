import React from "react";
import "./DropDownMenu.scss";
import { Link } from "react-scroll";

const DropDownMenu = () => {
  return (
    <div className="drop-down-menu">
      <ul>
        <li>
          <Link
            to="salon-services-section"
            smooth={true}
            duration={500}
            className="drop-down-link"
          >
            Salon Services
          </Link>
        </li>
        <hr />
        <li>
          <Link
            to="spa-services-section"
            smooth={true}
            duration={500}
            className="drop-down-link"
          >
            Spa Services
          </Link>
        </li>
        <hr />
        <li>
          <Link
            to="bridal-services-section"
            smooth={true}
            duration={500}
            className="drop-down-link"
          >
            Bridal Services
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
