import React from "react";
import Proptypes from "prop-types";
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

export default Content;
