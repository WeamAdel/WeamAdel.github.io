import React from "react";

function Heading() {
  return (
    <div className="col-md-7">
      <div className="heading">
        <h1 className="main-heading">
          <span className="d-block">Hi,</span>
          <span className="d-block">
            {" "}
            my name is <span className="underlined">Weam</span>
          </span>
          I am a front-end engineer and a <span className="design">design</span>{" "}
          enthusiast
        </h1>
      </div>
    </div>
  );
}

export default Heading;
