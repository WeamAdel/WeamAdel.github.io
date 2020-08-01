import React from "react";
import { Link } from "react-router-dom";

const PLUGINS = [
  { name: "PropTypes", link: "https://github.com/facebook/prop-types" },
  { name: "React Spring", link: "https://www.react-spring.io/" },
  { name: "React Sheet", link: "https://github.com/nadbm/react-datasheet" },
  {
    name: "Owl Carousel",
    link: "https://owlcarousel2.github.io/OwlCarousel2/",
  },
  {
    name: "Mixitup",
    link: "https://www.kunkalabs.com/mixitup/docs/get-started/",
  },
  { name: "Wow.js", link: "https://wowjs.uk/" },
  { name: "AOS", link: "https://michalsnik.github.io/aos/" },
  { name: "Carbon", link: "https://carbon.nesbot.com/docs/" },
];

function Plugins() {
  let pluginsJSX = PLUGINS.map((plugin) => (
    <li key={plugin.name}>
      <i className="fa fa-bug" />
      <a href={plugin.link} target="_blank" rel="noreferrer noopener">
        {plugin.name}
      </a>
    </li>
  ));
  return (
    <section className="plugins">
      <i className="external fa fa-external-link" />
      <h3 className="heading">Plugins</h3>
      <ul className="list-unstyled">{pluginsJSX}</ul>
    </section>
  );
}

export default Plugins;
