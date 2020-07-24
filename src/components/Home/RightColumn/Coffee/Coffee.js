import React from "react";
import { useTransition, animated } from "react-spring";

function Coffee() {
  let items = Array(6).fill(<i className="coffee-cup fa fa-coffee" />);

  const transitions = useTransition(items, (item) => item.key, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-40px,0)" },
  });

  const transitionsJSX = transitions.map(({ item, props, key }, index) => {
    return (
      <animated.div key={index} style={props}>
        {item}
      </animated.div>
    );
  });

  return (
    <div className="coffee">
      <div className="coffee-wrapper">
        {/* {items} */}
        {transitionsJSX}
      </div>

      <i className="fa fa-smile-o" />
    </div>
  );
}
export default Coffee;
