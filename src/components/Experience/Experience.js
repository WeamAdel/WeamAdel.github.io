import React from "react";
import Image from "./Image/Image";
import Content from "./Content/Content";

function Experience() {
  return (
    <div className="page experience">
      <div className="page-wrapper">
        <div className="my-container">
          <div className="wrapper">
            <Content />
            <Image />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
