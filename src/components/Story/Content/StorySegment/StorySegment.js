import React from "react";
import PropTypes from "prop-types";
import Card from "./Card/Card";
import Number from "./Number/Number";

function StorySegment(props) {
  return (
    <section className="story-segment">
      <div className="row">
        <Number number={props.number} />
        <Card content={props.content} />
      </div>
    </section>
  );
}

StorySegment.propTypes = {
  content: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default StorySegment;
