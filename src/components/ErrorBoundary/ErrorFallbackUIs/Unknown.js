import React from "react";
import { withRouter } from "react-router-dom";

function Unknown(props) {
  return (
    <div className="page error-boundary">
      <div className="page-wrapper">
        <main className="content">
          <div className="my-container text-center mx-auto">
            <section className="error unknown">
              <div className="image">
                <img
                  src="/assets/images/errors/repair.svg"
                  alt="map"
                  aria-hidden="true"
                />
              </div>
              <div className="content-wrapper">
                <h1>Something Went Wrong</h1>
                <p>
                  Please try to{" "}
                  <button
                    className="link-btn"
                    onClick={() => window.location.reload(false)}
                  >
                    reload
                  </button>{" "}
                  the page or{" "}
                  <button
                    className="link-btn"
                    onClick={() => props.history.goBack()}
                  >
                    go back
                  </button>{" "}
                  to the previous page
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default withRouter(Unknown);
