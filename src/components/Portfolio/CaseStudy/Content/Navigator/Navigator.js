import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import $ from "jquery";
function Navigator(props) {
  function niceScrollToTop(e) {
    if (e.target.tagName.toLowerCase() === "a") {
      $("html").animate(
        {
          scrollTop: 0,
        },
        500
      );
    }
  }
  return (
    <footer className="navigator">
      <div className="my-container">
        <nav className="project-navigator" onClick={niceScrollToTop}>
          {props.prev ? (
            <div className="nav-item prev">
              <Link to={"/portfolio/case-study/" + props.prev}>
                <i className="fa fa-long-arrow-left" />
                Prev
              </Link>
            </div>
          ) : null}
          {props.next ? (
            <div className="nav-item next">
              <Link to={"/portfolio/case-study/" + props.next}>
                Next
                <i className="fa fa-long-arrow-right" />
              </Link>
            </div>
          ) : null}
        </nav>
      </div>
    </footer>
  );
}

Navigator.propTypes = {
  next: PropTypes.string,
  prev: PropTypes.string,
};

export default Navigator;
