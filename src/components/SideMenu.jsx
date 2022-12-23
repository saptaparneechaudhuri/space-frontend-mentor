import React from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ handleMenuDisplay }) => {
  return (
    <section className="side-menu-container">
      <div className="side-links-container">
        <div className="side-link-item" id="close" onClick={handleMenuDisplay}>
          <img src="/assets/shared/icon-close.svg" alt="close" />
        </div>
        <Link className="side-link-item" to="/" id="home">
          <span>00</span>
          <div className="nav-link">Home</div>
        </Link>

        <Link className="side-link-item" to="/destination" id="destination">
          <span>01</span>
          <div className="nav-link">Destination</div>
        </Link>

        <Link className="side-link-item" to="/crew" id="crew">
          <span>02</span>
          <div className="nav-link">Crew</div>
        </Link>

        <Link className="side-link-item" to="/technology" id="technology">
          <span>03</span>
          <div className="nav-link">Technology</div>
        </Link>
      </div>
    </section>
  );
};

export default SideMenu;
