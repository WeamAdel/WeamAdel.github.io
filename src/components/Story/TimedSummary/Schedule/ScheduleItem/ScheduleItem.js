import React from "react";
import PropTypes from "prop-types";

function ScheduleItem(props) {
  return (
    <li className={`schedule-item ${props.type || "education"}`}>
      <div className="icon">
        <i
          title={props.type || "education"}
          className={`fa fa-${props.iconName ? props.iconName : "university"}`}
        />
      </div>
      <div className="wrapper">
        <h3>{props.title}</h3>
        <time dateTime={props.date}>{props.date}</time>
      </div>
    </li>
  );
}

ScheduleItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["education", "work"]).isRequired,
  iconName: PropTypes.string,
};

export default ScheduleItem;
