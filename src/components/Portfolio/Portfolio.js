import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";

function Portfolio() {
  return (
    <div className="page portfolio">
      <div className="page-wrapper">
        <div className="my-container">
          <Header />
        </div>
        <Content />
      </div>
    </div>
  );
}

export default Portfolio;
