import React from "react";
import PropTypes from "prop-types";
import About from "./About/About";
import Heading from "./Heading/Heading";

function Header(props) {
  return (
    <header>
      <div className="row">
        <Heading projectName={props.name} year={props.year} />
        <About
          description={props.description}
          imgUrl={props.imgUrl}
          alt={props.alt}
        />
      </div>
      <div className="triangle">
        <div />
        <div />
      </div>
    </header>
  );
}

Header.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Header;
