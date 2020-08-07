import React from "react";
import PropTypes from "prop-types";

function Icon(props) {
  let icon = props.icon;

  let iconJSX = icon.iconUrl ? (
    <img src={icon.iconUrl} alt={icon.alt} title={icon.title} />
  ) : (
    <i className={`fa fa-${icon.fontIcon}`} />
  );

  return icon.link ? <a href={icon.link}>{iconJSX}</a> : iconJSX;
}

Icon.propTypes = {
  icon: PropTypes.shape({
    iconUrl: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    fontIcon: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default Icon;
