import React from "react";

function Icons() {
  const ICONS = [
    "hourglass-half",
    "flask",
    "book",
    "calculator",
    "pencil",
    "keyboard-o",
    "code",
    "coffee",
    "paint-brush",
    "sticky-note",
  ];

  let iconsJSX = ICONS.map((icon, index) => (
    <i key={index} className={`icon fa fa-${icon}`} />
  ));

  return <div className="icons-bg">{iconsJSX}</div>;
}

export default Icons;
