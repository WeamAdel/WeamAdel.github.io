import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./../shared/Footer/Footer";

function Portfolio(props) {
  console.log(props);

  return (
    <div className="page portfolio">
      <div className="page-wrapper">
        <div className="my-container">
          <Header />
        </div>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
