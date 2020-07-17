import React from "react";
import { useSpring, animated } from "react-spring";
import NavLink from "./NavLink/NavLink";
const imgsPath = "/assets/images/nav/";

const NAV_LINKS = [
  {
    title: "home",
    link: "/",
    iconUrl: imgsPath + "home" + ".svg",
    alt: "",
    bgColor: "#0a0c1b",
  },
  {
    title: "experience",
    link: "/experience",
    iconUrl: imgsPath + "experience" + ".svg",
    alt: "",
    bgColor: "#aac1af",
  },
  {
    title: "my story",
    link: "/story",
    iconUrl: imgsPath + "story" + ".svg",
    alt: "",
    bgColor: "#c1aabe",
  },
  {
    title: "technologies",
    link: "/technologies",
    iconUrl: imgsPath + "technologies" + ".svg",
    alt: "",
    bgColor: "#9f1725",
  },
  {
    title: "portfolio",
    link: "/portfolio",
    iconUrl: imgsPath + "portfolio" + ".svg",
    alt: "",
    bgColor: "#fbadba",
  },
  {
    title: "on my agenda",
    link: "/agenda",
    iconUrl: imgsPath + "agenda" + ".svg",
    alt: "",
    bgColor: "#f08",
  },
  {
    title: "my books shelf",
    link: "/books-shelf",
    iconUrl: imgsPath + "books" + ".svg",
    alt: "",
    bgColor: "#00a3ac",
  },
  {
    title: "being cooked",
    link: "/being-cooked",
    iconUrl: imgsPath + "cooked" + ".svg",
    alt: "",
    bgColor: "#004554",
  },
  {
    title: "contact",
    link: "/contact",
    iconUrl: imgsPath + "contact" + ".svg",
    alt: "",
    bgColor: "#f5a900",
  },
];

function Menu(props) {
  let springProps = useSpring({ top: props.open ? 0 : -200 });
  let navLinksJSX = NAV_LINKS.map((link) => (
    <NavLink key={link.title} {...link} />
  ));

  return (
    <animated.div
      id="main-nav-menu"
      className="menu"
      style={{ top: springProps.top.interpolate((top) => `${top}%`) }}
    >
      <div className="my-container">
        <ul className="nav-links">{navLinksJSX}</ul>
      </div>
    </animated.div>
  );
}

export default Menu;