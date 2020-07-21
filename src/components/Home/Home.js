import React from "react";
import Heading from "./Heading/Heading";
import RightColumn from "./RightColumn/RightColumn";

function Home() {
  return (
    <header className="home">
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
