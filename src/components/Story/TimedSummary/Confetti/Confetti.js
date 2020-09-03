import React, { useEffect } from "react";
import ConfettiGenerator from "confetti-js";

function Confetti() {
  React.useEffect(() => {
    const confettiSettings = {
      target: "summary-confetti",
      props: ["circle"],
      max: 8,
      clock: 25,
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);
  return <canvas id="summary-confetti" />;
}

export default Confetti;
