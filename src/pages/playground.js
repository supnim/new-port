import React from "react";
import Layout from "../components/layout";

import TitleP from "../components/TitleP";
import path from "../components/videoPaths";

const data = path.map(content => (
  <TitleP
    title={content.description}
    id={content.id}
    paragraph={content.description}
  />
));

function Grounds({ title, paragraph }) {
  return (
    <div>
      <Layout>
        <h1>Playground</h1>
        <TitleP title={title} paragraph={paragraph} />
        {data}
        {/* <Card /> */}
        {/* <OnHover /> */}
        {/* <Drive /> */}
      </Layout>
    </div>
  );
}

export default Grounds;
