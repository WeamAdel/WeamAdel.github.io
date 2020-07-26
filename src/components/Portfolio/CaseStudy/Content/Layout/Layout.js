import React from "react";
import PropTypes from "prop-types";

function Layout(props) {
  return (
    <section className="info-section">
      <div className="row">
        <div className="col-md-6">
          <div className="heading">
            <h3>{props.heading}</h3>
          </div>
        </div>
        <div className="col-md-6">
          <div className="main-content">{props.children}</div>
        </div>
      </div>
    </section>
  );
}

Layout.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Layout;
