import React from "react";
import Proptypes from "prop-types";

function Technology(props) {
  let iconImageJSX = props.fontIcon ? (
    <i className={`icon fa fa-${props.fontIcon}`} />
  ) : (
    <img className="icon" src={props.iconUrl} alt={`${props.title} icon`} />
  );

  return (
    <div className="technology">
      <div className="icon-wrapper">
        <span className="level" />
        {iconImageJSX}
      </div>
      <p className="title">{props.title}</p>
    </div>
  );
}

export default Technology;
