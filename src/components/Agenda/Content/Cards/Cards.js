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
    about:
      "It is a typed superset of JavaScript that compiles to plain JavaScript.  Learning Angular framework needs prior knowledge of TypeScript, too.",
    link: "https://www.typescriptlang.org/",
    priority: PRIORITIES.medium,
  },
  {
    name: "WebPack",
    about:
      "It k is a tool that compile JavaScript modules, also known as module or assets bundler. it generates a single file (or a few files) that run your app.",
    link: "https://webpack.js.org/",
    priority: PRIORITIES.high,
  },
  {
    name: "AWS",
    about:
      "Amazon Web Services is a cloud platform offering numerous fully featured services from data centers globally.",
    link: "https://aws.amazon.com/",
    priority: PRIORITIES.low,
  },
  {
    name: "Node.js",
    about:
      "It  is an open source, cross-platform runtime environment for developing server-side and networking applications.",
    link: "https://nodejs.org/",
    priority: PRIORITIES.low,
  },
  {
    name: "Firebase",
    about:
      "It helps build apps fast by giving functionality like analytics, databases, crash reporting without managing infrastructure.",
    link: "https://firebase.google.com/",
    priority: PRIORITIES.medium,
  },
  {
    name: "Angular.js",
    about:
      "It’s an open-source full-fledged framework used to create Single Page Apps, it is built on TypeScript, developed and maintained by Google.",
    link: "https://angular.io/",
    priority: PRIORITIES.low,
  },
  {
    name: "Next.js",
    about:
      "Next.js is based on react, webpack and babel. It is an awesome tool for creating web application and famous for server-side rendering.",
    link: "https://nextjs.org/",
    priority: PRIORITIES.medium,
  },
  {
    name: "React Testing Library",
    about:
      "It is a family of packages that helps test UI components to give high confidence that components are working for users",
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
