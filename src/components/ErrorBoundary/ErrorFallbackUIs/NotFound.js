import React from "react";
import PropTypes from "prop-types";

function NotFound(props) {
  return (
    <section className="error not-found">
      <h1>The page you are trying to visit does not exist!</h1>
      <p>
        Please try to make sure you requist a valid URL or
        <button className="link-btn" onClick={props.goBack}>
          go back
        </button>{" "}
        to the previous page
      </p>
    </section>
  );
}

NotFound.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default NotFound;
