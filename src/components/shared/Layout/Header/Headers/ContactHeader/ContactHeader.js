import React from "react";
import Header from "./../../Header";
import PropTypes from "prop-types";

function ContactHeader(props) {
  return (
    <Header
      heading={props.heading}
      imgUrl={props.imgUrl}
      alt={props.alt}
    ></Header>
  );
}
export default ContactHeader;
