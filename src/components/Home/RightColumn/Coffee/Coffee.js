import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import Cup from "./Cup/Cup";

function Coffee() {
  let cupsJSX = [];
  for (let i = 0; i < 6; i++) {
    cupsJSX.push(<Cup key={i} index={i} />);
  }

  const [emojiType, setEmojiType] = useState("sad");
  const transitions = useTransition(emojiType, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    setEmojiType("sad");
  }, []);

  setTimeout(() => {
    setEmojiType("happy");
  }, 5200);

  let emojiJSX = transitions.map(({ item, key, props }) => {
    return (
      <animated.div className="emoji" style={props}>
        <img src={`./assets/images/home/${item}.svg`} />
      </animated.div>
    );
  });

  return (
    <div className="coffee">
      <div className="coffee-wrapper">{cupsJSX}</div>
      {emojiJSX}
    </div>
  );
}
export default Coffee;
