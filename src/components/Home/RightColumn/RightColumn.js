import React from "react";
import { useSpring, animated } from "react-spring";
import Avatar from "./Avatar/Avatar";
import Quote from "./../../shared/Quote/Quote";
import Coffee from "./Coffee/Coffee";
import Accounts from "./Accounts/Accounts";

function RightColumn() {
  const springProps = useSpring({
    form: { height: 0 },
    to: { height: "auto" },
  });

  return (
    <div className="col-md-5 offset-md-1 order-first order-md-last">
      <div className="right-column">
        <animated.div className="main-content" style={springProps}>
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
