import React, { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

function Cup(props) {
  let { transform, opacity } = useSpring({
    config: config.stiff,
    delay: props.index * 200 + 4000,
    from: { transform: -40, opacity: 0 },
    to: { transform: 0, opacity: 1 },
  });

  return (
    <animated.i
      className="coffee-cup fa fa-coffee"
      style={{
        transform: transform.interpolate((y) => `translateY(${y}px)`),
        opacity: opacity,
      }}
    />
  );
}

export default Cup;
