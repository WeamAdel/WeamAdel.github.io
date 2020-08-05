import React from "react";
import Layout from "./Layout/Layout";
import List from "./List/List";

function Content(props) {
  let project = props.project;
  return (
    <main className="content">
      <div className="my-container">
        <Layout heading="Features Highlight">
          <List items={project.features} iconType="check" />
        </Layout>
        <Layout heading="My Role">
          <List items={project.role} />
        </Layout>
        <Layout heading="Technologies">
          <List items={project.technologies} />
        </Layout>
        <Layout heading="Color Pallet">
          <List items={project.pallet} type="pallet" />
        </Layout>
        <Layout heading="Typography">
          <List items={project.typography} />
        </Layout>
        <Layout heading="Sample Screenshots">
          <p>Hi</p>
        </Layout>
        <Layout heading="Things I've Learned">
          <List items={project.learned} iconType="check" />
        </Layout>
        <Layout heading="Things I Need To Improve">
          <List items={project.improvement} iconType="contrast" />
        </Layout>
        <Layout heading="View Full Project On">
          <p>Hi</p>
        </Layout>
        <p>Navigate</p>
      </div>
    </main>
  );
}

export default Content;
