import React from "react";
import { useSpring, animated, config } from "react-spring";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const MONTHS = {
  jan: { numeric: 1, name: "Jan" },
  june: { numeric: 6, name: "June" },
  july: { numeric: 7, name: "July" },
  dec: { numeric: 12, name: "Dec" },
};
const EXPERIENCE = [
  {
    id: "blue_ocean_intern",
    year: 2019,
    months: [MONTHS.july, MONTHS.dec],
    description:
      "Blue Ocean Solutions For Digital Solutions Internship (Best Member)",
    follow: "blue_ocean",
  },
  {
    id: "blue_ocean",
    year: 2020,
    months: [MONTHS.jan, MONTHS.june],
    description:
      "Full Stack Web Developer at Blue Ocean Solutions (Team Leader)",
    lead: "blue_ocean_intern",
  },
];

function ExperienceCards(props) {
  let sortedArray =
    props.sortType !== "asc"
      ? [...EXPERIENCE].sort((a, b) => {
          return a.year === b.year ? 0 : a.year > b.year ? -1 : 1;
        })
      : EXPERIENCE;

  let cardsJSX = sortedArray.map((exp, index) => (
    <ExperienceCard key={index} {...exp} cardId={"exp-card-" + index} />
  ));

  return <animated.section className="exp-cards">{cardsJSX}</animated.section>;
}

export default ExperienceCards;
