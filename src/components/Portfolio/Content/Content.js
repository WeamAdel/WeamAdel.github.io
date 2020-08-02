import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const projectImagesNames = ["main", "right", "left", "top"];
const PROJECTS = [
  {
    name: "My Fitness Goal",
    idea: "Solution",
    imagesDir: "/mfg",
    releaseDate: "2020 Jan",
    description:
      "Web app for users to find trainers, nutritionists, clinics and gyms.",
    category: "Health & Beauty",
    type: "SPA",
    redirect: {
      caseStudy: {
        title: "Case Study",
        link: "/mfg",
        iconName: "case.svg",
      },
      livePreview: {
        title: "Live Preview",
        link: null,
        iconName: "link.svg",
      },
      contact: {
        title: "Contact Me",
        link: "/contact",
        iconName: "email.svg",
      },
    },
  },
];
function Content() {
  let projectCardsJSX = PROJECTS.map((item, index) => (
    <ProjectCard key={index} {...item} imagesNames={projectImagesNames} />
  ));
  return <main className="content">{projectCardsJSX}</main>;
}

export default Content;
