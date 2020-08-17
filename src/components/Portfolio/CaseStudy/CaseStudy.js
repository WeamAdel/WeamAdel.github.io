import React, { useState, useEffect } from "react";
import { PROJECTS } from "./../../../utility/utilConsts";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Navigator from "./Content/Navigator/Navigator";

function CaseStudy(props) {
  let [indexes, setIndexes] = useState({
    current: null,
    next: null,
    prev: null,
  });
  const projectName = props.match.params.projectName;
  let project = {};

  if (!projectName) throw new Error("No project names were provided");
  if (!PROJECTS[projectName])
    throw new Error(
      "Provided project name does not match any of the existing projects"
    );
  if (projectName && PROJECTS[projectName]) project = PROJECTS[projectName];

  const projectNames = Object.keys(PROJECTS);
  function findCurrentPrevNextIndexes() {
    const currentIndex = projectNames.findIndex((name) => name === projectName);
    if (currentIndex < 0) {
      throw new Error(
        "Provided project name does not match any of the existing projects"
      );
    }

    const prevIndex = currentIndex === 0 ? null : currentIndex - 1;
    const nextIndex =
      currentIndex === PROJECTS.length - 1 ? null : currentIndex + 1;

    return { current: currentIndex, prev: prevIndex, next: nextIndex };
  }

  useEffect(() => {
    setIndexes(findCurrentPrevNextIndexes());
  }, [projectName]);

  return (
    <div className="page case-study">
      <div className="page-wrapper">
        <Header
          {...project.header}
          imgUrl={
            "/assets/images/portfolio/projects/" +
            projectName +
            "/case-study/" +
            "header.jpg"
          }
        />
        <Content project={project} projectName={projectName} />
        <Navigator
          next={projectNames[indexes.next]}
          prev={projectNames[indexes.prev]}
        />
      </div>
    </div>
  );
}

export default CaseStudy;
