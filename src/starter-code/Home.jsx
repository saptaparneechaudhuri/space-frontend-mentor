import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <section className=" background home-page-container">
      <Header />
      <div className="home-page-content-container">
        <div className="home-page-content-left">
          <p className="home-page-content-left-1"> So, you want to travel to</p>
          <h1 className="home-page-content-left-2"> Space</h1>
          <p className="home-page-content-left-3">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-page-content-right-wrapper">
          <div className="home-page-content-right">
            <h2>Explore</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
