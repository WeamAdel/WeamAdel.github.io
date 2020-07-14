import React from "react";
import Proptypes from "prop-types";

function Technology(props) {
  return (
    <div className="technology">
      <div className="icon-wrapper">
        <span className={["level", props.level].join(" ")} />
        <img className="icon" src={props.iconUrl} alt={`${props.title} icon`} />
      </div>
      <p className="title">{props.title}</p>
    </div>
  );
}

export default Technology;
