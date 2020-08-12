import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar/ProgressBar";

function Category(props) {
  return (
    <li className={`category ${props.id}`}>
      <span className="name">{props.name}</span>
      <div className="progress-wrapper">
        <span className="count">{"0" + props.count}</span>
        <ProgressBar percentage={props.percentage} color={props.color} />
      </div>
    </li>
  );
}

Category.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Category;
