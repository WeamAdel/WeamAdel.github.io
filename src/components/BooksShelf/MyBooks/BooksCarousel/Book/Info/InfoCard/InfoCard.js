import React from "react";
import PropTypes from "prop-types";

function InfoCard(props) {
  return (
    <div className="info-card" title={props.title}>
      <div className="image">
        <img src={"/assets/images/books/icons/" + props.iconName + ".svg"} />
      </div>
      <p>{props.value}</p>
    </div>
  );
}

InfoCard.propTypes = {};

export default InfoCard;
