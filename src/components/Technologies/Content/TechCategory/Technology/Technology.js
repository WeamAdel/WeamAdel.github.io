import React from "react";
import Proptypes from "prop-types";

function Technology(props) {
  return (
    <div className="technology">
      <div className="icon-wrapper">
        <span
          className={["level", props.level].join(" ")}
          title={props.level[0].toUpperCase() + props.level.slice(1)}
        />
        <img className="icon" src={props.iconUrl} alt={`${props.title} icon`} />
      </div>
      <p className="title">{props.title}</p>
    </div>
  );
}

Technology.propTypes = {
  level: Proptypes.string.isRequired,
  iconUrl: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
};

export default Technology;
