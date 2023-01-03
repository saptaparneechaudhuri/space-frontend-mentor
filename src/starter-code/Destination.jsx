import React from "react";

const Destination = () => {
  return (
    <section className="background destination-page-container">
      <div className="destination-page-wrapper">
        <div className="destination-page-content-left">
          <div className="destination-page-content-left-1">
            <span>01</span>
            <p>Pick your destination</p>
          </div>
          <div className="destination-page-content-left-2">
            <img src="/assets/destination/image-moon.png" alt="moon" />
          </div>
        </div>

        <div className="destination-page-content-right">
          <div className="destination-page-content-right-nav">
            <div className="destination-page-content-nav-item">Moon</div>
            <div className="destination-page-content-nav-item">Mars</div>
            <div className="destination-page-content-nav-item">Titan</div>
            <div className="destination-page-content-nav-item">Europa</div>
          </div>
          <div className="destination-page-content-right-1">
            <h1>Moon</h1>
          </div>

          <div className="destination-page-content-right-2">
            <p>
              {" "}
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
          <div className="destination-page-content-line"></div>
          <div className="destination-page-content-right-3">
            <div>
              <span>Avg. Distance</span>
              <p>384,400 km</p>
            </div>

            <div>
              <span>Est. travel time</span>
              <p> 3 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
