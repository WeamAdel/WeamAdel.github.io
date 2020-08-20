import React from "react";
import PropTypes from "prop-types";

function About(props) {
  let descriptionJSX = props.description
    ? props.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))
    : "";
  return (
    <div className="col-md-6">
      <div className="my-container">
        <div className="about">
          <div className="image">
            <img src={props.imgUrl} alt={props.alt} />
          </div>
          <div className="description">{descriptionJSX}</div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
};

export default About;
