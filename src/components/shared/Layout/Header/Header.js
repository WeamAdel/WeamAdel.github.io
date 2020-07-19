import React from "react";
import HeaderImage from "./../../HeaderImage/HeaderImage";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <h1 className="page-heading">{props.heading}</h1>
      <div className="header-wrapper">
        <HeaderImage imgUrl={props.imgUrl} alt={props.alt} />
        {props.children ? props.children : null}
      </div>
    </header>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Header;
