import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ReadingProgress(props) {
  const progressBarsJSX = props.stories.map((story, index) => (
    <span key={index} />
  ));
  return <div className="reading-progress">{progressBarsJSX}</div>;
}

ReadingProgress.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default ReadingProgress;
