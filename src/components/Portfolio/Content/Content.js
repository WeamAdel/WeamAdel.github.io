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
    },
  },
  {
    name: "Task Scheduler",
    idea: "Solution",
    imagesDir: "/scheduler",
    releaseDate: "2019 Dec",
    description: "Web app for users shcedule and prioritize their tasks.",
    category: "Tools & Productivity",
    type: "SPA",
    redirect: {
      caseStudy: {
        title: "Case Study",
        link: "/scheduler",
        iconName: "case.svg",
      },
      livePreview: {
        title: "Live Preview",
        link: null,
        iconName: "link.svg",
      },
    },
  },
  {
    name: "Quantum",
    idea: "Solution",
    imagesDir: "/quantum",
    releaseDate: "2019 Oct",
    description:
      "A static website for student mobility service in Mansoura, Egypt",
    category: "Education & Travel",
    type: "Static",
    redirect: {
      caseStudy: {
        title: "Case Study",
        link: "/quantum",
        iconName: "case.svg",
      },
      livePreview: {
        title: "Live Preview",
        link: null,
        iconName: "link.svg",
      },
    },
  },
  {
    name: "Pharmacy",
    idea: "Dummy",
    imagesDir: "/pharmacy",
    releaseDate: "2019 Aug",
    description:
      "A dummy front-end project made to practice html, css and javascript.",
    category: "E-commerce",
    type: "Static",
    redirect: {
      caseStudy: {
        title: "Case Study",
        link: "/pharmacy",
        iconName: "case.svg",
      },
      livePreview: {
        title: "Live Preview",
        link: null,
        iconName: "link.svg",
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
