import React from "react";

const Crew = () => {
  return (
    <section className=" background crew-page-container">
      <div className="crew-page-title">
        <span>02</span>
        <p>Meet your crew</p>
      </div>

      <div className="crew-content-wrapper">
        <div className="crew-content-left">
          <div className="crew-content-left-1">
            <p> Commander</p>
            <h1> Douglas Hurley</h1>
          </div>

          <div className="crew-content-left-2">
            <p>
              {" "}
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
        </div>
        <div className="crew-content-right">
          <img src="/assets/crew/image-douglas-hurley.png" alt="crew" />
          <div className="crew-right-border"></div>
        </div>
      </div>
      <div className="dots-container">
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
      </div>
    </section>
  );
};

export default Crew;
