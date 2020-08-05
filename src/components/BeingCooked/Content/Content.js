import React from "react";
import Card from "./Card/Card";

const BEING_COOKED_PROJECTS = [
  {
    idea: "Scheduler",
    type: "Mobile App",
    imgName: "scheduler.jpg",
    alt: "Anime drawing of several watches",
  },
  {
    idea: "Pet Dating",
    type: "Mobile App",
    imgName: "cat.jpg",
    alt: "Blue eyed cat wearing a crown of blue flowers",
  },
  {
    idea: "Roommate",
    type: "Web App",
    imgName: "home.jpg",
    alt: "3D Drawing of a living room",
  },
];

function Content() {
  let projectsCardsJSX = BEING_COOKED_PROJECTS.map((project, index) => (
    <Card key={index} project={project} />
  ));
  return <main className="main content">{projectsCardsJSX}</main>;
}

export default Content;
