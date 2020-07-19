import React from "react";
import HeaderImage from "./../../HeaderImage/HeaderImage";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      {props.children ? (
        props.children
      ) : (
          <HeaderImage imgUrl={props.imgUrl} alt={props.alt} />
      )}
    </header>
  );
}
export default Header;
