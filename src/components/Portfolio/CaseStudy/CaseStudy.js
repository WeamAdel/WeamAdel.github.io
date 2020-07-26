import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";

function CaseStudy() {
  return (
    <div className="page case-study">
      <div className="page-wrapper">
        <Header
          page="caseStudy"
          imgUrl="/assets/images/portfolio/case-studies/header-images/mfg.jpg"
          alt="Woman doing yoga"
          headingLineColor="#FFF701"
        />
        <Content />
      </div>
    </div>
  );
}

export default CaseStudy;
