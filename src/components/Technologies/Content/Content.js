import React from "react";
import PropTypes from "prop-types";
import TechCategory from "./TechCategory/TechCategory";
import Legend from "./../../shared/Legend/Legend";
import Plugins from "./Plugins/Plugins";

function Content(props) {
  let techCatsJSX = props.technologies.map((tech) => (
    <TechCategory
      key={tech.category}
      category={tech.category}
      technologies={tech.technologies}
    />
  ));
  return (
    <main className="main content">
      <Legend bullets={props.legendBullets} />
      {techCatsJSX}
      <Plugins />
    </main>
  );
}

Content.propTypes = {
  technologies: PropTypes.array.isRequired,
  legendBullets: PropTypes.array.isRequired,
};

export default Content;
