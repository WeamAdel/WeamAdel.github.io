import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar/ProgressBar";

function Category(props) {
  return (
    <li className="category">
      <span className="name">{props.name}</span>
      <div className="progress-wrapper">
        <span>{"0" + props.count}</span>
        <ProgressBar percentage={props.percentage} />
      </div>
    </li>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Category;
