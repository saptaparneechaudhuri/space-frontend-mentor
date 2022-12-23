import React, { useEffect, useState } from "react";
import data from "../data/data.json";

const Technology = () => {
  const [techData, setTechData] = useState({
    name: data.technology[0].name,
    description: data.technology[0].description,
    image: data.technology[0].images.portrait,
    imageDesktop: data.technology[0].images.landscape,
    id: data.technology[0].id,
  });

  const handleClick = (item) => {
    setTechData({
      name: item.name,
      description: item.description,
      image: item.images.portrait,
      imageDesktop: item.images.landscape,
      id: item.id,
    });
  };
  useEffect(() => {
    // adds the active class as page loads
    let linkItem = document.querySelector("#technology");
    linkItem.classList.add("active");

    let circle = document.querySelector(`#circle-${techData.id}`);
    circle.classList.add("active");

    return () => {
      // remove the active class as the page unmounts
      linkItem.classList.remove("active");
      circle.classList.remove("active");
    };
  }, [techData]);
  return (
    <section className=" background technology-page-container">
      <div className="tech-page-title">
        <span>03</span>
        <p>Space Launch 101</p>
      </div>
      <div className="tech-page-content-wrapper">
        <div className="tech-page-content-left">
          <img
            src={techData.imageDesktop}
            className="tech-landscape"
            alt={techData.name}
          />
          <div className="tech-page-content-left-1">
            {data.technology.map((item) => {
              return (
                <div
                  className="tech-circle"
                  key={item.id}
                  id={`circle-${item.id}`}
                  onClick={() => handleClick(item)}
                >
                  <span>{item.id}</span>
                </div>
              );
            })}
          </div>

          <div className="tech-page-content-left-2">
            <p className="tech-content-title">The terminology...</p>
            <h1>{techData.name}</h1>
            <p className="tech-description">{techData.description}</p>
          </div>
        </div>
        <div className="tech-page-content-right">
          <img src={techData.image} alt={techData.name} />
        </div>
      </div>
    </section>
  );
};

export default Technology;
