import React from "react";
import Proptypes from "prop-types";
import Technology from "./Technology/Technology";

function TechCategory(props) {
  let technologiesJSX = props.technologies.map((tech) => (
    <Technology key={tech.title} {...tech} />
  ));
  return (
    <section className="tech-category">
      <h2 className="heading">
        <i className="icon fa fa-mouse" />
        <span>{props.category}</span>
      </h2>
      <div className="techs-wrapper">{technologiesJSX}</div>
    </section>
  );
}

TechCategory.propTypes = {
  category: Proptypes.string.isRequired,
  technologies: Proptypes.arrayOf(
    Proptypes.shape({
      title: Proptypes.string.isRequired,
      iconUrl: Proptypes.string.isRequired,
      level: Proptypes.string.isRequired,
    })
  ).isRequired,
};

export default TechCategory;
