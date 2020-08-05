import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  let project = props.project;

  return (
    <div className="project-card">
      <p className="type">{project.type}</p>
      <div className="wrapper">
        <img
          src={`/assets/images/cooked/${project.imgName}`}
          alt={project.alt}
        />
        <p className="idea">{project.idea}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  project: PropTypes.shape({
    type: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    idea: PropTypes.string.isRequired,
  }),
};

export default Card;
