import React from "react";
import Card from "./Card/Card";

const PRIORITIES = {
  high: "high",
  medium: "medium",
  low: "low",
};

const TECHNOLOGIES = [
  {
    name: "PostCSS",
    about:
      "PostCSS is a tool for transforming CSS with JavaScript.Because it is built in JavaScript it runs much faster than Sass and less.",
    link: "https://postcss.org/",
    priority: PRIORITIES.high,
  },
  {
    name: "Tailwind",
    about:
      "it is a CSS framework, but instead of predesigned components that's hard to override its styles, Tailwind provides low-level utility classes.",
    link: "https://tailwindcss.com/",
    priority: PRIORITIES.high,
  },
  {
    name: "Vue.js",
    about:
      "It's a JS framework, but it's a way more structured and easy to learn, as well as it takes less time to build new apps",
    link: "https://vuejs.org/",
    priority: PRIORITIES.low,
  },
  {
    name: "TypeScript",
    about: "kkkksjf",
    link: "https://www.typescriptlang.org/",
    priority: PRIORITIES.medium,
  },
  {
    name: "WebPack",
    about: "kkk",
    link: "https://webpack.js.org/",
    priority: PRIORITIES.high,
  },
  {
    name: "AWS",
    about: "kkk",
    link: "https://aws.amazon.com/",
    priority: PRIORITIES.low,
  },
  {
    name: "Node.js",
    about: "kkk",
    link: "https://nodejs.org/",
    priority: PRIORITIES.low,
  },
  {
    name: "Firebase",
    about: "kkk",
    link: "https://firebase.google.com/",
    priority: PRIORITIES.medium,
  },
  {
    name: "Angular.js",
    about: "kkk",
    link: "https://angular.io/",
    priority: PRIORITIES.low,
  },
  {
    name: "Next.js",
    about: "kkk",
    link: "https://nextjs.org/",
    priority: PRIORITIES.medium,
  },
  {
    name: "React Testing Library",
    about: "kkk",
    link: "https://testing-library.com/",
    priority: PRIORITIES.high,
  },
];

function Cards() {
  let technologiesJSX = TECHNOLOGIES.map((tech) => (
    <Card key={tech.name} {...tech} />
  ));
  return (
    <section className="page-section tech-cards">
      <div className="my-container">
        <h2>Technologies</h2>
        <div className="cards-wrapper">{technologiesJSX}</div>
      </div>
    </section>
  );
}

export default Cards;
