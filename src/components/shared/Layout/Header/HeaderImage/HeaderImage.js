import React from "react";
import Proptypes from "prop-types";

function HeaderImage(props) {
  return (
    <div className="header-image">
      <img key="image" src={props.imgUrl} alt={props.alt} />
    </div>
  );
}

HeaderImage.propTypes = {
  imgUrl: Proptypes.string.isRequired,
  alt: Proptypes.string.isRequired,
};

export default HeaderImage;
