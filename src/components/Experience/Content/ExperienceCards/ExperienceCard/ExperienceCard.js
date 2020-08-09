import React from "react";
import PropTypes from "prop-types";

function ExperienceCard(props) {
  const months = `${props.months[0].name} - ${props.months[1].name}`;
  return (
    <div className="exp-card">
      <h2 className="time">
        <time className="year" dateTime={props.year}>
          {props.year}
        </time>
        <time className="months" dateTime={months}>
          {months}
        </time>
      </h2>
      <p className="description">{props.description}</p>
    </div>
  );
}

ExperienceCard.propTypes = {
  year: PropTypes.number.isRequired,
  months: PropTypes.arrayOf(
    PropTypes.shape({
      numeric: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceCard;
