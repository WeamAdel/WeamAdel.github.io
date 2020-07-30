import React from "react";
import PropTypes from "prop-types";

function StoryNumber(props) {
  const isEven = props.number % 2 == 0;
  return (
    <div className={`col-md-6 ${isEven ? "order-md-last" : ""}`}>
      <div className="story-number">
        <p data-content={`0${props.number}`}>{`0${props.number}`}</p>
      </div>
    </div>
  );
}

StoryNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default StoryNumber;
