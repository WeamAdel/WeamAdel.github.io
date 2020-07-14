import React from "react";
import Proptypes from "prop-types";
import TechCategory from "./TechCategory/TechCategory";

function Content(props) {
  let techCatsJSX = props.technologies.map((tech) => (
    <TechCategory
      key={tech.category}
      category={tech.category}
      technologies={tech.technologies}
    />
  ));
  return <main className="main content">{techCatsJSX}</main>;
}

export default Content;
