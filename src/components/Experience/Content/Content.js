import React from "react";
import ExperienceCards from "./ExperienceCards/ExperienceCards";

function Content() {
  return (
    <main className="content">
      <h1 className="page-heading">
        <span className="d-block">Work</span> Experience
      </h1>
      <ExperienceCards />
    </main>
  );
}

export default Content;
