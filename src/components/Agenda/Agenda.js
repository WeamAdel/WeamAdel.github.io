import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./../shared/Footer/Footer";

function Agenda() {
  return (
    <div className="page agenda">
      <div className="page-wrapper">
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Agenda;
