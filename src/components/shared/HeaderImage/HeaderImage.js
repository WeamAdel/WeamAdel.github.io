import React from "react";
import Proptypes from "prop-types";

function HeaderImage(props) {
  let headingJSX = (
    <h1 key="heading" className="page-header">
      {props.heading}
    </h1>
  );
  let imageJSX = <img key="image" src={props.imgUrl} alt={props.alt} />;
  let contentJSX = [headingJSX, imageJSX];

  return props.isHeader ? (
    <header className="header-image">{contentJSX}</header>
  ) : (
    <div className="header-image">{contentJSX}</div>
  );
}

HeaderImage.propTypes = {
  heading: Proptypes.string.isRequired,
  imgUrl: Proptypes.string.isRequired,
  alt: Proptypes.string.isRequired,
  isHeader: Proptypes.bool,
};

export default HeaderImage;
