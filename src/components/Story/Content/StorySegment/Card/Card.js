import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="col-md-6">
      <div className="story-card" style={{ minHeight: props.height + "px" }}>
        <span className="flip-page" />
        <p>{props.content}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Card;
