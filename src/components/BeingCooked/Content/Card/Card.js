import React from "react";
import PropTypes from "prop-types";
import { animated, useSpring, config } from "react-spring";

function Card(props) {
  console.log(props);
  let project = props.project;
  let { transform, opacity } = useSpring({
    from: { transform: 0, opacity: 0 },
    to: { transform: props.index * 20 + 5, opacity: 1 },
    delay: props.index * 1000,
    config: config.molasses,
  });
  return (
    <animated.div
      className="project-card"
      style={{
        transform: transform.interpolate((y) => `translateY(${y}%)`),
        opacity: opacity,
      }}
    >
      <p className="type">{project.type}</p>
      <div className="wrapper">
        <img
          src={`/assets/images/cooked/${project.imgName}`}
          alt={project.alt}
        />
        <p className="idea">{project.idea}</p>
      </div>
    </animated.div>
  );
}

Card.propTypes = {
  project: PropTypes.shape({
    type: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    idea: PropTypes.string.isRequired,
  }),
};

export default Card;
