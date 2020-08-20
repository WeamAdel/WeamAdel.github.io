import React from "react";
import PropTypes from "prop-types";

function Text(props) {
  let paragraphsJSX = props.text.paragraphs.map((p, index) => (
    <p key={index}>{p}</p>
  ));

  // function createParagraphWithLink(arr) {
  //   let
  // }

  return (
    <div className="text">
      <span className="number">{"0" + props.number}</span>
      <h3 className="title">{props.text.title}</h3>
      {paragraphsJSX}
    </div>
  );
}

Text.propTypes = {
  text: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
  }).isRequired,
  number: PropTypes.number.isRequired,
};

export default Text;
