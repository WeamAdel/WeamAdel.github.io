import React from "react";
import PropTypes from "prop-types";

function ProgressBar(props) {
  console.log(props);
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={props.percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: props.percentage + "%" }}
      ></div>
    </div>
  );
}

export default ProgressBar;
