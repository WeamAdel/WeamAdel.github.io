import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";

function BeingCooked() {
  return (
    <div className="page being-cooked">
      <div className="my-container">
        <div className="page-wrapper flex">
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default BeingCooked;
