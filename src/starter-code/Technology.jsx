import React from "react";

const Technology = () => {
  return (
    <section className=" background technology-page-container">
      <div className="tech-page-title">
        <span>03</span>
        <p>Space Launch 101</p>
      </div>
      <div className="tech-page-content-wrapper">
        <div className="tech-page-content-left">
          <img
            src="/public/assets/image-launch-vehicle-landscape.jpg"
            className="tech-landscape"
            alt="name"
          />
          <div className="tech-page-content-left-1">
            <div className="tech-circle">
              <span>1</span>
            </div>
            <div className="tech-circle">
              <span>2</span>
            </div>
            <div className="tech-circle">
              <span>3</span>
            </div>
          </div>

          <div className="tech-page-content-left-2">
            <p className="tech-content-title">The terminology...</p>
            <h1>Launch Vehicle</h1>
            <p className="tech-description">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
        <div className="tech-page-content-right">
          <img
            src="/assets/technology/image-launch-vehicle-portrait.jpg"
            alt="name-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
