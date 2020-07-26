import React from "react";
import HeaderImage from "./HeaderImage/HeaderImage";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <div className={`${!props.flex ? "my-container" : ""}`}>
        <h1 className="page-heading">{props.heading}</h1>
        <div className="header-wrapper">
          <HeaderImage imgUrl={props.imgUrl} alt={props.alt} />
          {props.children ? props.children : null}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  headingLineColor: PropTypes.string,
};
export default Header;
