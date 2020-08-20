import React from "react";
import PropTypes from "prop-types";

function Video(props) {
  const videoPath = ` /assets/images/portfolio/projects/${props.projectName}/case-study/video/`;
  return (
    <video
      id="video"
      controls
      preload="metadata"
      poster={videoPath + "poster.jpg"}
    >
      <source src={videoPath + "demo.mp4"} type="video/mp4" />
    </video>
  );
}

Video.propTypes = {
  projectName: PropTypes.string.isRequired,
};

export default Video;
