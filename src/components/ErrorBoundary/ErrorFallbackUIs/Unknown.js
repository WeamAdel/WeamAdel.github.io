import React from "react";
import PropTypes from "prop-types";

function Unknown(props) {
  return (
    <section className="error unknown">
      <h1>Something Went Wrong</h1>
      <p>
        Please try to{" "}
        <button className="link-btn" onClick={props.refresh}>
          reload
        </button>{" "}
        the page or{" "}
        <button className="link-btn" onClick={props.goBack}>
          go back
        </button>{" "}
        to the previous page
      </p>
    </section>
  );
}

Unknown.propTypes = {
  refresh: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default Unknown;
