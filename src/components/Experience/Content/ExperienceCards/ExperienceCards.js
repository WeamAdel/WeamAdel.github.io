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
    year: 2019,
    months: [MONTHS.july, MONTHS.dec],
    description:
      "Blue Ocean Solutions For Digital Solutions Internship (Best Member)",
  },
  {
    year: 2020,
    months: [MONTHS.jan, MONTHS.june],
    description:
      "Full Stack Web Developer at Blue Ocean Solutions (Technical Lead)",
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
    <ExperienceCard key={index} {...exp} />
  ));

  return <animated.section className="exp-cards">{cardsJSX}</animated.section>;
}

export default ExperienceCards;
