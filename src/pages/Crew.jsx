import React, { useEffect, useState } from "react";
import data from "../data/data.json";

const Crew = () => {
  const [crew, setCrew] = useState({
    name: data.crew[0].name,
    image: data.crew[0].images.png,
    role: data.crew[0].role,
    bio: data.crew[0].bio,
    id: data.crew[0].id,
  });

  const handleClick = (item) => {
    setCrew({
      name: item.name,
      image: item.images.png,
      role: item.role,
      bio: item.bio,
      id: item.id,
    });
  };
  useEffect(() => {
    // adds the active class as page loads
    let linkItem = document.querySelector("#crew");
    linkItem.classList.add("active");

    let dot = document.querySelector(`#crew-${crew.id}`);
    dot.classList.add("active");

    return () => {
      // remove the active class as the page unmounts
      linkItem.classList.remove("active");
      dot.classList.remove("active");
    };
  }, [crew]);
  return (
    <section className=" background crew-page-container">
      <div className="crew-page-title">
        <span>0{crew.id}</span>
        <p>Meet your crew</p>
      </div>

      <div className="crew-content-wrapper">
        <div className="crew-content-left">
          <div className="crew-content-left-1">
            <p>{crew.role}</p>
            <h1>{crew.name}</h1>
          </div>

          <div className="crew-content-left-2">
            <p>{crew.bio}</p>
          </div>
        </div>
        <div className="crew-content-right">
          <img src={crew.image} alt={crew.name} />
          <div className="crew-right-border"></div>
        </div>
      </div>
      <div className="dots-container">
        {data.crew.map((item) => {
          return (
            <div
              className="dots"
              id={`crew-${item.id}`}
              onClick={() => handleClick(item)}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Crew;
