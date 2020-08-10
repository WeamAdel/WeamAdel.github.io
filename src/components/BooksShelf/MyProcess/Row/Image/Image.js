import React from "react";
import PropTypes from "prop-types";

function Image(props) {
  return (
    <div className="image">
      <img src={"/assets/images/books/process/" + props.image.name + ".svg"} />
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    name: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Image;
