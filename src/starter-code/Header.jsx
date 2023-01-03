import React from "react";

// import SideMenu from "./SideMenu";

const Header = () => {
  return (
    <section className="header-container">
      <nav className="nav-container">
        <div className="logo">
          <img src="assets/shared/logo.svg" alt="logo" />
        </div>
        <div className="nav-line"></div>
        <div className="nav-links-container">
          <div className="nav-link-item show" to="/" id="home">
            <span>00</span>
            <div className="nav-link">Home</div>
          </div>

          <div className="nav-link-item show" to="destination" id="destination">
            <span>01</span>
            <div className="nav-link">Destination</div>
          </div>

          <div className="nav-link-item show" to="/crew" id="crew">
            <span>02</span>
            <div className="nav-link">Crew</div>
          </div>

          <div className="nav-link-item show" to="/technology" id="technology">
            <span>03</span>
            <div className="nav-link">Technology</div>
          </div>

          <div className="nav-link-item hidden menu" id="hamburger">
            <img src="/assets/shared/icon-hamburger.svg" alt="menu" />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
