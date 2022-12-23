import React from "react";

const DestinationContent = ({ planetData }) => {
  return (
    <>
      <div className="destination-page-content-right-1">
        <h1>{planetData.name}</h1>
      </div>

      <div className="destination-page-content-right-2">
        <p>{planetData.description}</p>
      </div>
      <div className="destination-page-content-line"></div>
      <div className="destination-page-content-right-3">
        <div>
          <span>Avg. Distance</span>
          <p>{planetData.distance}</p>
        </div>

        <div>
          <span>Est. travel time</span>
          <p> {planetData.travel}</p>
        </div>
      </div>
    </>
  );
};

export default DestinationContent;
