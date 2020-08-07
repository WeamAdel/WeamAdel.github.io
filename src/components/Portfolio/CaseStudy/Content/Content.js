import React from "react";
import Layout from "./Layout/Layout";
import List from "./List/List";

const STUDY_ASPECTS = {
  features: { heading: "Features Highlight", iconType: "check" },
  role: { heading: "My Role", iconType: null },
  technologies: { heading: "Technologies", iconType: null },
  designTools: { heading: "Design Tools", iconType: null, type: "icon" },
  pallet: { heading: "Color Pallet", iconType: null, type: "pallet" },
  typography: { heading: "Typography", iconType: null },
  screenshots: { heading: "Sample Screenshots", iconType: null },
  video: { heading: "Demo Video", iconType: null },
  learned: { heading: "Things I've Learned", iconType: "check" },
  improvement: { heading: "Things I Need To Improve", iconType: "contrast" },
  fullProject: {
    heading: "View Full Project On",
    iconType: null,
    type: "icon",
  },
};

function Content(props) {
  let project = props.project;
  let contentJSX = Object.keys(project).map((key, index) => {
    if (project[key] && STUDY_ASPECTS[key]) {
      return (
        <Layout heading={STUDY_ASPECTS[key].heading} key={index}>
          <List
            items={project[key]}
            iconType={STUDY_ASPECTS[key].iconType}
            type={STUDY_ASPECTS[key].type}
          />
        </Layout>
      );
    }
  });

  return (
    <main className="content">
      <div className="my-container">{contentJSX}</div>
    </main>
  );
}

export default Content;
