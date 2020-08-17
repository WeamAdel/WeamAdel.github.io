import React from "react";
import PropTypes from "prop-types";

function Screenshot(props) {
  let image = props.image;
  return (
    <div className="screenshot">
      <h4 className="title">
        <i className="fa fa-image mr-2" />
        {image.title}
      </h4>
      <img
        src={
          "/assets/images/portfolio/projects/" +
          props.projectName +
          "/" +
          "case-study/screenshots/" +
          image.imgName +
          ".jpg"
        }
        alt={image.alt}
      />
    </div>
  );
}

Screenshot.propTypes = {
  image: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
export default Screenshot;
