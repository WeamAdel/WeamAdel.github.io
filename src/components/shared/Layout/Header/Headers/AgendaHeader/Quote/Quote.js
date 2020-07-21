import React from "react";
import PropTypes from "prop-types";

function Quote(props) {
  return (
    <blockquote className="quote">
      <p>
        I'm always trying new things and learning new things. If there isn't
        anything more you can learn - go off and die
      </p>
      <cite>― Morgan Freeman</cite>
    </blockquote>
  );
}
export default Quote;
