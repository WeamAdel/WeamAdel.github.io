import React, { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import Toggler from "./Toggler/Toggler";
import Menu from "./Menu/Menu";

function Navbar() {
  let [open, toggle] = useState(false);

  const toggleMenu = function () {
    toggle(!open);
  };

  let menu = document.getElementById("main-nav-menu");
  if (menu && !window.onscroll) {
    window.addEventListener("scroll", function () {
      let menuHeight = menu ? menu.offsetHeight : 0;
      if (open && window.pageYOffset >= menuHeight - 120) {
        toggle(false);
      }
    });
  }

  return (
    <nav className="main-nav">
      <div className="my-container d-flex justify-content-between">
        <Logo />
        <Toggler toggleMenu={toggleMenu} />
      </div>
      <Menu open={open} closeMenu={toggleMenu} />
    </nav>
  );
}

export default Navbar;
