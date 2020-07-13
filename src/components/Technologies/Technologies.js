import React from "react";
import HeaderImage from "../shared/HeaderImage/HeaderImage";
import Content from "./Content/Content";

const PROFFESIONCY_LEVELS = {
  entry: "entry",
  med: "med",
  advanced: "advanced",
};

const TECHNOLOGIES = [
  {
    type: "front end",
    skills: [
      {
        title: "JavaScript",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "JQuery",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "React",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "Redux",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "HTML5",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "CSS3",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "SASS",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.med,
      },
      {
        title: "Bootstrap",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.advanced,
      },
    ],
  },
  {
    type: "front end",
    skills: [
      {
        title: "Laravel",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.med,
      },
      {
        title: "PHP",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.entry,
      },
      {
        title: "MySQL",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.entry,
      },
    ],
  },
  {
    type: "cross browser",
    skills: [
      {
        title: "React Native",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.entry,
      },
      {
        title: "Flutter",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.entry,
      },
    ],
  },
  {
    type: "front end",
    skills: [
      {
        title: "Laravel",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.med,
      },
      {
        title: "PHP",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.entry,
      },
      {
        title: "MySQL",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.entry,
      },
    ],
  },
  {
    type: "design",
    skills: [
      {
        title: "Adobe Xd",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.advanced,
      },
      {
        title: "Protopie 8",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.med,
      },
      {
        title: "Photoshop",
        fontIcon: "",
        level: PROFFESIONCY_LEVELS.entry,
      },
      {
        title: "Illustrator",
        fontIcon: "",
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
          imgUrl="/assets/images/technologies/img.jpg"
          alt="Turned on mackbook pro near brown ceramic mug"
          isHeader={true}
        />
      </div>
    </div>
  );
}

export default Technologies;
