import React from "react";
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
function ExperienceCards() {
  let cardsJSX = EXPERIENCE.map((exp, index) => (
    <ExperienceCard key={index} {...exp} />
  ));
  return <section className="exp-cards">{cardsJSX}</section>;
}

export default ExperienceCards;
