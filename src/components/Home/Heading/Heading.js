import React from "react";
import { useSpring, animated, config } from "react-spring";

function Heading() {
  let { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: 100, opacity: 1 },
    delay: 1000,
    config: config.wobbly,
  });

  return (
    <div className="col-md-6">
      <div className="heading">
        <animated.h1
          className="main-heading"
          style={{
            height: height.interpolate((h) => h + "%"),
            opacity: opacity,
          }}
        >
          <span className="d-block">Hi,</span>
          my name is <span className="underlined">Weam</span>, I am a front-end
          engineer and a <span className="design">design</span> enthusiast
        </animated.h1>
      </div>
    </div>
  );
}

export default Heading;
