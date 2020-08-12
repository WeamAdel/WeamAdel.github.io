import React from "react";
import PropTypes from "prop-types";

function ProgressBar(props) {
  return (
    <div className="progress" title={props.percentage.toFixed(2) + "%"}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={props.percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: props.percentage + "%", backgroundColor: props.color }}
      ></div>
    </div>
  );
}

export default ProgressBar;
