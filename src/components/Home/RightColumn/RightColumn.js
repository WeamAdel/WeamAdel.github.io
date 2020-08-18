import React from "react";
import { useSpring, animated, config } from "react-spring";
import Avatar from "./Avatar/Avatar";
import Quote from "./../../shared/Quote/Quote";
import Coffee from "./Coffee/Coffee";
import Accounts from "./Accounts/Accounts";

function RightColumn() {
  let { transform, opacity } = useSpring({
    from: { transform: -100, opacity: 0 },
    to: { transform: 0, opacity: 1 },
    delay: 2000,
    duration: config.slow,
  });

  return (
    <div className="column col-md-5 offset-md-1 order-first order-md-last">
      <div className="right-column">
        <animated.div
          className="main-content"
          style={{
            transform: transform.interpolate((y) => `translateY(${y}%)`),
            opacity: opacity,
          }}
        >
          <Avatar />
          <Quote
            quote="The powers of a man's mind are directly proportioned to the quantity of coffee he drinks."
            cite="Sir James Mackintosh"
          />
          <Coffee />
        </animated.div>
        <Accounts />
      </div>
    </div>
  );
}

export default RightColumn;
