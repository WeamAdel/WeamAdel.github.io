import React from "react";
import ScheduleItem from "./ScheduleItem/ScheduleItem";

const SCHEDULE_ITEMS = [
  {
    title: "Full Stack Web Developer at Blue Ocean Solutions (Team Leader)",
    date: "Jan 2020 - June 2020",
    iconName: "suitcase",
    type: "work",
  },
  {
    title:
      "Blue Ocean Solutions For Digital Solutions Internship (Best Member)",
    date: "July 2019 - Dec 2019",
    type: "education",
  },

  {
    title: "UTW Mechanical Department Internship (Best Member)",
    date: "July 2017 - Sept 2017",
    type: "education",
  },
  {
    title: "Autodesk Revit Certified Professional",
    date: "Sept 2016",
    iconName: "certificate",
    type: "education",
  },
  {
    title: (
      <span>
        Mechatronics Engineering at Mansoura University (18<sup>th</sup>)
      </span>
    ),
    date: "Sept 2013 - Aug 2018",
    type: "education",
  },
];
function Schedule() {
  let itemsJSX = SCHEDULE_ITEMS.map((item, index) => (
    <ScheduleItem key={index} {...item} />
  ));
  return (
    <div className="col-md-6">
      <div className="schedule mx-auto">
        <ul className="list-unstyled mb-0">{itemsJSX}</ul>
      </div>
    </div>
  );
}

export default Schedule;
