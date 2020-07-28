import React from "react";
import Header from "./Header/Header";
import TimedSummary from "./TimedSummary/TimedSummary";

function Story() {
  return (
    <div className="page story">
      <div className="page-wrapper">
        <Header />
        <TimedSummary />
      </div>
    </div>
  );
}

export default Story;
