import React from "react";
import PropTypes from "prop-types";

function Quote(props) {
  return (
    <blockquote className="quote">
      <p>{props.quote}</p>
      <cite>― {props.cite}</cite>
    </blockquote>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  cite: PropTypes.string.isRequired,
};
export default Quote;
