import React, { useRef } from "react";
import { useTransition, useChain, animated, config } from "react-spring";

function Coffee() {
  //   let items = [
  //     { id: 1, jsx: <i className="coffee-cup fa fa-coffee" /> },
  //     { id: 2, jsx: <i className="coffee-cup fa fa-coffee" /> },
  //     { id: 3, jsx: <i className="coffee-cup fa fa-coffee" /> },
  //     { id: 4, jsx: <i className="coffee-cup fa fa-coffee" /> },
  //     { id: 5, jsx: <i className="coffee-cup fa fa-coffee" /> },
  //     { id: 6, jsx: <i className="coffee-cup fa fa-coffee" /> },
  //   ];
  //   let [items, setItems] = useState([<i className="coffee-cup fa fa-coffee" />]);
  //let count = 0;
  let items = Array(6).fill(<i className="coffee-cup fa fa-coffee" />);
  const transitionRef = useRef();
  const transitions = useTransition(items, (item) => item.key, {
    ref: transitionRef,
    config: config.stiff,
    unique: true,
    from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(0,-40px,0)", opacity: 0 },
  });

  useChain([transitionRef], [0, 0.5]);

  const transitionsJSX = transitions.map(({ item, props }, index) => {
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
