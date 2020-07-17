import React from "react";
import PropTypes from "prop-types";
import { NavLink as NavigationLink } from "react-router-dom";

function NavLink(props) {
  return (
    <div className="nav-link">
      <p className="title">{props.title}</p>
      <NavigationLink
        to={props.link}
        exact
        style={{ backgroundColor: props.bgColor }}
      >
        <img src={props.iconUrl} alt={props.alt} />
      </NavigationLink>
    </div>
  );
}

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default NavLink;
