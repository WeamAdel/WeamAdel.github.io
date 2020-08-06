import React from "react";
import PropTypes from "prop-types";

function Icon(props) {
  let iconJSX = props.iconUrl ? (
    <img src={props.iconUrl} alt={props.alt} title={props.title} />
  ) : (
    <i className={`fa fa-${props.fontIcon}`} />
  );

  return props.link ? <a href={props.link}>{iconJSX}</a> : iconJSX;
}

Icon.propTypes = {
  iconUrl: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  fontIcon: PropTypes.string,
  link: PropTypes.string,
};

export default Icon;
