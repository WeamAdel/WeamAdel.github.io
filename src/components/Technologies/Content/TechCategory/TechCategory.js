import React from "react";
import Proptypes from "prop-types";
import Technology from "./Technology/Technology";

function TechCategory(props) {
  let technologiesJSX = props.technologies.map((tech) => (
    <Technology key={tech.title} {...tech} />
  ));
  return (
    <section className="tech-category">
      <h2 className="heading">{props.category}</h2>
      <div className="techs-wrapper">{technologiesJSX}</div>
    </section>
  );
}

export default TechCategory;
