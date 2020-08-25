import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div className="page error-boundary">
      <div className="page-wrapper">
        <main className="content">
          <div className="my-container text-center mx-auto">
            <section className="error not-found">
              <div className="image">
                <img
                  src="/assets/images/errors/map.svg"
                  alt="map"
                  aria-hidden="true"
                />
              </div>
              <div className="content-wrapper">
                <h1>
                  <span>404</span>
                  The page you are trying to visit does not exist!
                </h1>
                <p>
                  You can
                  <button
                    className="link-btn"
                    onClick={() => props.history.goBack()}
                  >
                    go back
                  </button>{" "}
                  to the previous page or go to{" "}
                  <Link className="link-btn" to={"/"}>
                    Home
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default withRouter(NotFound);
