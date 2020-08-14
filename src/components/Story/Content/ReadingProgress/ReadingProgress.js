import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ReadingProgress(props) {
  const [currenInViewtStoryIndex, setCurrenInViewtStoryIndex] = useState(0);
  const progressBarsJSX = props.stories.map((story, index) => (
    <span
      id={`reading-bullet-${index + 1}`}
      className="reading-bullet"
      style={{
        backgroundColor:
          index <= currenInViewtStoryIndex ? "#0a0c1b" : "transparent",
      }}
      key={index}
    />
  ));

  useEffect(() => {
    function findInViewStoryIndex() {
      const stories = document.getElementsByClassName("story-segment");
      let currentStoryIndex = 0;
      if (stories) {
        Array.from(stories).forEach((story, index) => {
          const storyTopOffset = story.offsetTop;
          const storyHeight = parseInt(
            getComputedStyle(story).getPropertyValue("height")
          );
          const windowScrollTop = window.scrollY;
          if (storyTopOffset + storyHeight / 2 <= windowScrollTop) {
            currentStoryIndex = index;
          }
        });
      }
      return currentStoryIndex;
    }

    function updateCurrenInViewtStoryIndex() {
      let index = findInViewStoryIndex();
      if (index != currenInViewtStoryIndex) {
        setCurrenInViewtStoryIndex(index);
      }
    }
    window.addEventListener("scroll", updateCurrenInViewtStoryIndex);
    window.addEventListener("resize", updateCurrenInViewtStoryIndex);

    return function cleanUp() {
      window.removeEventListener("scroll", updateCurrenInViewtStoryIndex);
      window.removeEventListener("resize", updateCurrenInViewtStoryIndex);
    };
  });
  return <div className="reading-progress">{progressBarsJSX}</div>;
}

ReadingProgress.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default ReadingProgress;
