import React from "react";

const INFO_LIST = [
  {
    title: "Current Location",
    value: "Mansoura, Egypt",
    iconName: "location.svg",
    alt: "Map Pin",
  },
  {
    title: "Relocating",
    value: "Open to relocate",
    iconName: "plane.svg",
    alt: "Departure Plane",
  },
  {
    title: "Email",
    value: "weamadel.dev@gmail.com",
    iconName: "email.svg",
    alt: "@",
  },
];
function InfoList() {
  let listItemsJSX = INFO_LIST.map((item, index) => (
    <li key={index}>
      <span className="icon">
        <img
          src={"/assets/images/contact/info-icons/" + item.iconName}
          title={item.title}
          alt={`${item.alt} icon`}
        />
      </span>
      <span className="value">{item.value}</span>
    </li>
  ));
  return <ul className="info-list list-unstyled">{listItemsJSX}</ul>;
}

export default InfoList;
