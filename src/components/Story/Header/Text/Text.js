import React from "react";
import PropTypes from "prop-types";
function Text(props) {
  return (
    <div className="col-md-6">
      <section className="text">
        <div className="text-wrapper mx-auto mx-md-0 text-center text-md-left">
          <h1 className="page-heading">My Story</h1>
          <p>
            The journey to identify what you love and where you fit best is not
            obvious nor easy. Here I will show some of the breakpoints in my own
            journey and the decisions I've made that led me to be a software
            engineer. Please feel free to jump to a timed summary to what I
            achieved throw that journey.
          </p>
          <button className="secondary-btn" onClick={props.toggleSummary}>
            <span>Jump to Timed Summary</span>
            <i className="fa fa-calendar" />
          </button>
        </div>
      </section>
    </div>
  );
}

Text.propTypes = {
  toggleSummary: PropTypes.func.isRequired,
};

export default Text;
