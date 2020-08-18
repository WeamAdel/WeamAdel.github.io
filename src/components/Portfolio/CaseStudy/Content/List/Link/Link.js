import React from "react";
import PropTypes from "prop-types";

function Link(props) {
  const link = props.link;
  return (
    <a href={link.link} target="blank" rel="noopener noreferrer">
      <i
        title={link.platform.title}
        className={`fa fa-${link.platform.fontIcon}`}
      />
    </a>
  );
}

Link.propTypes = {
  link: PropTypes.shape({
    platform: PropTypes.shape({
      title: PropTypes.string.isRequired,
      fontIcon: PropTypes.string.isRequired,
    }).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Link;
