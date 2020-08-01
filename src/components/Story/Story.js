import React, { useState } from "react";
import Header from "./Header/Header";
import TimedSummary from "./TimedSummary/TimedSummary";
import Content from "./Content/Content";

function Story() {
  let [open, toggle] = useState(false);

  function toggleSummary() {
    toggle(!open);
  }

  return (
    <div className="page story">
      <div className="page-wrapper">
        <Header toggleSummary={toggleSummary} />
        <TimedSummary toggleSummary={toggleSummary} open={open} />
        <Content />
      </div>
    </div>
  );
}

export default Story;
