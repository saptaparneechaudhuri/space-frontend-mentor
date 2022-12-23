import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, Link, useParams } from "react-router-dom";

import DestinationContent from "../components/DestinationContent";

import planets from "../data/data.json";

const Destination = () => {
  const [destinationData, setDestinationData] = useState({
    image: planets.destinations[0].images.png,
    name: planets.destinations[0].name,
    description: planets.destinations[0].description,
    distance: planets.destinations[0].distance,
    travel: planets.destinations[0].travel,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // adds the active class as page loads
    let linkItem = document.querySelector("#destination");
    linkItem.classList.add("active");

    let navItem = document.querySelector(
      `#${destinationData.name.toLowerCase()}`
    );
    navItem.classList.add("active");

    return () => {
      // remove the active class as the page unmounts
      linkItem.classList.remove("active");
      navItem.classList.remove("active");
    };
  }, [destinationData]);

  const handleDestinationData = (item) => {
    setDestinationData({
      image: item.images.png,
      name: item.name,
      description: item.description,
      distance: item.distance,
      travel: item.travel,
    });
  };

  // console.log(destinationData);
  return (
    <section className="background destination-page-container">
      <div className="destination-page-wrapper">
        <div className="destination-page-content-left">
          <div className="destination-page-content-left-1">
            <span>01</span>
            <p>Pick your destination</p>
          </div>
          <div className="destination-page-content-left-2">
            <img src={destinationData.image} alt={destinationData.name} />
          </div>
        </div>

        <div className="destination-page-content-right">
          {/* <DestinationContent planetData={planetData[0]} /> */}
          <div className="destination-page-content-right-nav">
            {planets.destinations.map((item) => {
              return (
                <div
                  key={item.id}
                  className="destination-page-content-nav-item"
                  id={item.name.toLowerCase()}
                  onClick={() => handleDestinationData(item)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <DestinationContent planetData={destinationData} />
        </div>
      </div>
    </section>
  );
};

export default Destination;
