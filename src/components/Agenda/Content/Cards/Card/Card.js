import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="tech-card">
      <span
        className={`priority ${props.priority}`}
        title={`${props.priority[0].toUpperCase()}${props.priority.slice(
          1
        )} Priority`}
      />
      <div className="head">
        <h3 className="name">{props.name}</h3>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {/* <img
            src="/assets/images/shared/external-link.svg"
            alt="external link icon"
          /> */}
          <i className="fa fa-external-link" />
        </a>
      </div>
      <p className="about">{props.about}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
};

export default Card;
