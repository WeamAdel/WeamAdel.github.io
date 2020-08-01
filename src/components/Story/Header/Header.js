import React from "react";
import PropTypes from "prop-types";
import Text from "./Text/Text";
import Image from "./Image/Image";

function Header(props) {
  return (
    <header>
      <div className="my-container">
        <div className="row">
          <Text toggleSummary={props.toggleSummary} />
          <Image />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  toggleSummary: PropTypes.func.isRequired,
};

export default Header;
