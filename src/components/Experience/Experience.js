import React from "react";
import Image from "./Image/Image";
import Content from "./Content/Content";
import SortButton from "./Content/SortButton/SortButton";

function Experience() {
  return (
    <div className="page experience">
      <div className="page-wrapper">
        <div className="my-container">
          <Content />
          <Image />
          <SortButton />
        </div>
      </div>
    </div>
  );
}

export default Experience;
