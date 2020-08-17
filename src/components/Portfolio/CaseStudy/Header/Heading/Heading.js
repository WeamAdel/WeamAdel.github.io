import React from "react";
import PropTypes from "prop-types";

function Heading(props) {
  return (
    <div className="col-md-6">
      <div className="heading-wrapper">
        <div className="my-container">
          <h1 className="page-heading">{props.projectName}</h1>
          <time dateTime={props.year}>{props.year}</time>
        </div>
      </div>
    </div>
  );
}

Heading.propTypes = {
  projectName: PropTypes.string.isRequired,
};

export default Heading;
