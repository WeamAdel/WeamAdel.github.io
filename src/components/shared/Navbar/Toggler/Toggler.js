import React from "react";
import PropTypes from "prop-types";

function Toggler(props) {
  return (
    <button onClick={props.toggleMenu} className="toggler">
      <i className="fa fa-bars" />
    </button>
  );
}

Toggler.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Toggler;
