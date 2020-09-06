import React, { useState } from "react";
import ExperienceCards from "./ExperienceCards/ExperienceCards";
import SortButton from "./SortButton/SortButton";

function Content() {
  let [sortType, setSortType] = useState("desc");

  function flipSorting() {
    setSortType(sortType === "asc" ? "desc" : "asc");
  }

  return (
    <main className="content">
      <h1 className="page-heading">
        <span className="d-block">Work</span> Experience
      </h1>
      <ExperienceCards sortType={sortType} />
      <SortButton
        flipSorting={flipSorting}
        title={`Sort experience ${
          sortType === "asc" ? "Descendingly" : "Ascendingly"
        }`}
      />
    </main>
  );
}

export default Content;
