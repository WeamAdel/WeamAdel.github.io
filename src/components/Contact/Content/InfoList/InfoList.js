import React from "react";

const INFO_LIST = [
  {
    title: "Current Location",
    value: "Mansoura, Egypt",
    iconName: "location.svg",
  },
  { title: "Relocating", value: "Open to relocate", iconName: "plane.svg" },
  { title: "Email", value: "weamadel.dev@gmail.com", iconName: "email.svg" },
];
function InfoList() {
  let listItemsJSX = INFO_LIST.map((item, index) => (
    <li key={index}>
      <span className="icon">
        <img
          src={"/assets/images/contact/info-icons/" + item.iconName}
          title={item.title}
        />
      </span>
      <span className="value">{item.value}</span>
    </li>
  ));
  return <ul className="info-list list-unstyled">{listItemsJSX}</ul>;
}

export default InfoList;
