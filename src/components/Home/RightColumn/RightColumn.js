import React from "react";
import { useSpring, animated, config } from "react-spring";
import Avatar from "./Avatar/Avatar";
import Quote from "./../../shared/Quote/Quote";
import Coffee from "./Coffee/Coffee";
import Accounts from "./Accounts/Accounts";

function RightColumn() {
  let { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: "auto", opacity: 1 },
    delay: 2000,
    duration: config.slow,
  });

  return (
    <div className="column col-md-5 offset-md-1 order-first order-md-last">
      <animated.div
        className="right-column"
        style={{
          height: height,
          opacity: opacity,
        }}
      >
        <div className="main-content">
          <Avatar />
          <Quote
            quote="The powers of a man's mind are directly proportioned to the quantity of coffee he drinks."
            cite="Sir James Mackintosh"
          />
          <Coffee />
        </div>
        <Accounts />
      </animated.div>
    </div>
  );
}

export default RightColumn;
