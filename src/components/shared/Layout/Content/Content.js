import React from "react";
import PropTypes from "prop-types";

function Content(props) {
  return <main className="content">{props.children}</main>;
}
export default Content;
