import React from "react";
import { PROJECTS } from "./../../../utility/utilConsts";
import Header from "./Header/Header";
import Content from "./Content/Content";

function CaseStudy(props) {
  const projectName = props.match.params.projectName;
  let project = {};

  if (!projectName) throw new Error("No project names were provided");
  if (!PROJECTS[projectName])
    throw new Error(
      "Provided project name does not match any of the existing projects"
    );
  if (projectName && PROJECTS[projectName]) project = PROJECTS[projectName];

  return (
    <div className="page case-study">
      <div className="page-wrapper">
        <Header
          header={project ? project.header : {}}
          mainThemeColor={project ? project.pallet[0] : ""}
        />
        <Content project={project} />
      </div>
    </div>
  );
}

export default CaseStudy;
