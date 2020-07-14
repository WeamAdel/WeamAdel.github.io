import React from "react";
import Proptypes from "prop-types";

function Legend(props) {
  console.log(props);
  let bulletsJSX = props.bullets.map((bullet) => (
    <span
      key={bullet}
      className={bullet}
      title={bullet[0].toUpperCase() + bullet.slice(1)}
    />
  ));
  return (
    <div className="legend">
      <span className="title">legend</span>
      <div className="bullets">{bulletsJSX}</div>
    </div>
  );
}

Legend.propTypes = { bullets: Proptypes.arrayOf(Proptypes.string).isRequired };

export default Legend;
