import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const years = currentYear - 2020 > 0 ? `2020 - ${currentYear}` : 2020;
  return (
    <footer className="main-footer">
      <p className="mb-0">Copyrights Reserved ©weamadel {years}</p>
    </footer>
  );
}

export default Footer;
