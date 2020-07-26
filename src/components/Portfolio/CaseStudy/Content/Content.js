import React from "react";
import { PROJECTS } from "./../../../../utility/utilConsts";
import Layout from "./Layout/Layout";
import List from "./List/List";

function Content() {
  return (
    <main className="content">
      <div className="my-container">
        <Layout heading="Features Highlight">
          <List items={PROJECTS.mfg.features} iconType="check" />
        </Layout>
        <Layout heading="My Role">
          <List items={PROJECTS.mfg.role} />
        </Layout>
        <Layout heading="Technologies">
          <List items={PROJECTS.mfg.technologies} />
        </Layout>
        <Layout heading="Color Pallet">
          <List items={PROJECTS.mfg.pallet} type="pallet" />
        </Layout>
        <Layout heading="Typography">
          <List items={PROJECTS.mfg.typography} />
        </Layout>
        <Layout heading="Sample Screenshots">
          <p>Hi</p>
        </Layout>
        <Layout heading="Things I've Learned">
          <List items={PROJECTS.mfg.learned} iconType="check" />
        </Layout>
        <Layout heading="Things I Need To Improve">
          <List items={PROJECTS.mfg.improvement} iconType="contrast" />
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
