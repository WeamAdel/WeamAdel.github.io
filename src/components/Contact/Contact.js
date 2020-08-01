import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";

function Contact() {
  return (
    <div className="page contact">
      <div className="my-container">
        <div className="page-wrapper flex">
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Contact;
