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
          <p>Hi</p>
        </Layout>
        <Layout heading="Technologies">
          <p>Hi</p>
        </Layout>
        <Layout heading="Color Pallet">
          <p>Hi</p>
        </Layout>
        <Layout heading="Typography">
          <p>Hi</p>
        </Layout>
        <Layout heading="Sample Screenshots">
          <p>Hi</p>
        </Layout>
        <Layout heading="Things I've Learned">
          <p>Hi</p>
        </Layout>
        <Layout heading="Things I Need To Improve">
          <p>Hi</p>
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
