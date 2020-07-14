import React from "react";
import HeaderImage from "../shared/HeaderImage/HeaderImage";
import Content from "./Content/Content";

const PROFFESIONCY_LEVELS = {
  entry: "entry",
  med: "med",
  advanced: "advanced",
};

const imgsPath = "/assets/images/technologies/";

const TECHNOLOGIES = [
  {
    category: "front end",
    technologies: [
      {
        title: "JavaScript",
        fontIcon: "js",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "JQuery",
        iconUrl: imgsPath + "jquery.svg",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "React",
        fontIcon: "react",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "Redux",
        iconUrl: imgsPath + "redux.svg",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "HTML5",
        fontIcon: "html5",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "CSS3",
        fontIcon: "css3-alt",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "SASS",
        fontIcon: "sass",
        level: PROFFESIONCY_LEVELS.med,
      },
      {
        title: "Bootstrap",
        fontIcon: "bootstrap",
        level: PROFFESIONCY_LEVELS.advanced,
      },
    ],
  },
  {
    category: "back end",
    technologies: [
      {
        title: "Laravel",
        fontIcon: "laravel",
        level: PROFFESIONCY_LEVELS.med,
      },
      {
        title: "PHP",
        fontIcon: "php",
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
        fontIcon: "react",
        level: PROFFESIONCY_LEVELS.entry,
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
        title: "Protopie 8",
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
      <div className="container">
        <HeaderImage
          heading="Technologies"
          imgUrl={imgsPath + "img.jpg"}
          alt="Turned on mackbook pro near brown ceramic mug"
          isHeader={true}
        />

        <Content technologies={TECHNOLOGIES} />
      </div>
    </div>
  );
}

export default Technologies;
