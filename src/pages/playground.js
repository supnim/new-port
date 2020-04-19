import React from "react";
import Layout from "../components/layout";

// import OnHover from "../components/OnHover"
// import Card from "../components/card"
// import Project from "../templates/project"
// import Drive from "../components/questions"

import TitleP from "../components/TitleP";
import path from "../components/videoPaths";

const data = path.map(content => (
  <TitleP
    title={content.description}
    id={content.id}
    paragraphy={content.description}
  />
));

function Grounds({ title, paragraphy }) {
  return (
    <div>
      <Layout>
        <h1>Playground</h1>
        <TitleP title={title} paragraphy={paragraphy} />
        {data}
        {/* <Card /> */}
        {/* <OnHover /> */}
        {/* <Drive /> */}
      </Layout>
    </div>
  );
}

export default Grounds;
