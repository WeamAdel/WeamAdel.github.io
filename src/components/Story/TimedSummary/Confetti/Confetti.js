import React, { useEffect } from "react";
import ConfettiGenerator from "confetti-js";
function Confetti() {
  React.useEffect(() => {
    const confettiSettings = { target: "summary-confetti" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);
  return <canvas id="summary-confetti" />;
}

export default Confetti;
