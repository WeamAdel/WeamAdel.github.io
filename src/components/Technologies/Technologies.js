import React from "react";
import Content from "./Content/Content";
import Header from "./Header/Header";
import Footer from "./../shared/Footer/Footer";

const imgsPath = "/assets/images/technologies/";

const PROFFESIONCY_LEVELS = {
  advanced: "advanced",
  med: "med",
  entry: "entry",
};

const TECHNOLOGIES = [
  {
    category: "front end",
    technologies: [
      {
        title: "JavaScript",
        iconUrl: imgsPath + "js.svg",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "JQuery",
        iconUrl: imgsPath + "jquery.svg",
        level: PROFFESIONCY_LEVELS.med,
      },
      {
        title: "React",
        iconUrl: imgsPath + "react.svg",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "Redux",
        iconUrl: imgsPath + "redux.svg",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "HTML5",
        iconUrl: imgsPath + "html.svg",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "CSS3",
        iconUrl: imgsPath + "css.svg",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "SASS",
        iconUrl: imgsPath + "sass.svg",
        level: PROFFESIONCY_LEVELS.med,
      },
      {
        title: "Bootstrap",
        iconUrl: imgsPath + "bootstrap.svg",
        level: PROFFESIONCY_LEVELS.advanced,
      },
    ],
  },
  {
    category: "back end",
    technologies: [
      {
        title: "Laravel",
        iconUrl: imgsPath + "laravel.svg",
        level: PROFFESIONCY_LEVELS.med,
      },
      {
        title: "PHP",
        iconUrl: imgsPath + "php.svg",
        level: PROFFESIONCY_LEVELS.entry,
      },
      {
        title: "MySQL",
        iconUrl: imgsPath + "mysql.svg",
        level: PROFFESIONCY_LEVELS.entry,
      },
    ],
  },
  {
    category: "cross browser",
    technologies: [
      {
        title: "React Native",
        iconUrl: imgsPath + "react.svg",
        level: PROFFESIONCY_LEVELS.med,
      },
      {
        title: "Flutter",
        iconUrl: imgsPath + "flutter.svg",
        level: PROFFESIONCY_LEVELS.entry,
      },
    ],
  },
  {
    category: "design",
    technologies: [
      {
        title: "Adobe Xd",
        iconUrl: imgsPath + "xd.svg",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "ProtoPie",
        iconUrl: imgsPath + "protopie.svg",
        level: PROFFESIONCY_LEVELS.med,
      },
      {
        title: "Photoshop",
        iconUrl: imgsPath + "ps.svg",
        level: PROFFESIONCY_LEVELS.entry,
      },
      {
        title: "Illustrator",
        iconUrl: imgsPath + "ai.svg",
        level: PROFFESIONCY_LEVELS.entry,
      },
    ],
  },
];

function Technologies() {
  return (
    <div className="page technologies">
      <div className="my-container">
        <h1 className="page-heading">Technologies</h1>
        <div className="page-wrapper flex">
          <Header />
          <Content
            technologies={TECHNOLOGIES}
            legendBullets={Object.values(PROFFESIONCY_LEVELS)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Technologies;
