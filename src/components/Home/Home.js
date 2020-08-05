import React from "react";
import Heading from "./Heading/Heading";
import RightColumn from "./RightColumn/RightColumn";

function Home() {
  return (
    <header className="home">
      <img
        className="welcome"
        src="/assets/images/home/welcome-white.svg"
        alt="Welcome"
        aria-hidden={true}
      />
      <img
        className="welcome"
        src="/assets/images/home/welcome-dark.svg"
        alt="Welcome"
        aria-hidden={true}
      />
      <div className="my-container">
        <div className="row">
          <Heading />
          <RightColumn />
        </div>
      </div>
    </header>
  );
}

export default Home;
