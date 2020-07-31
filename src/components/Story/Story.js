import React from "react";
import Header from "./Header/Header";
import TimedSummary from "./TimedSummary/TimedSummary";
import Content from "./Content/Content";

function Story() {
  return (
    <div className="page story">
      <div className="page-wrapper">
        <Header />
        <TimedSummary />
        <Content />
      </div>
    </div>
  );
}

export default Story;
