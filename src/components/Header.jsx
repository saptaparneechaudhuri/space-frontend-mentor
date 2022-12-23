import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import SideMenu from "./SideMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuDisplay = () => {
    setShowMenu(!showMenu);
  };
  return (
    <section className="header-container">
      {showMenu && (
        <SideMenu id="close-menu" handleMenuDisplay={handleMenuDisplay} />
      )}
      <nav className="nav-container">
        <div className="logo">
          <img src="assets/shared/logo.svg" alt="logo" />
        </div>
        <div className="nav-line"></div>
        <div className="nav-links-container">
          <Link className="nav-link-item show" to="/" id="home">
            <span>00</span>
            <div className="nav-link">Home</div>
          </Link>

          <Link
            className="nav-link-item show"
            to="destination"
            id="destination"
          >
            <span>01</span>
            <div className="nav-link">Destination</div>
          </Link>

          <Link className="nav-link-item show" to="/crew" id="crew">
            <span>02</span>
            <div className="nav-link">Crew</div>
          </Link>

          <Link className="nav-link-item show" to="/technology" id="technology">
            <span>03</span>
            <div className="nav-link">Technology</div>
          </Link>

          <div
            className="nav-link-item hidden menu"
            id="hamburger"
            onClick={handleMenuDisplay}
          >
            <img src="/assets/shared/icon-hamburger.svg" alt="menu" />
          </div>
        </div>
      </nav>

      <Outlet />
    </section>
  );
};

export default Header;
