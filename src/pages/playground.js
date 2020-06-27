import React from "react";
import Layout from "../components/layout";

import TitleP from "../components/TitleP";
import path from "../components/videoPaths";
import LogoBox from "../components/logobox";

// const data = path.map((content) => (
//   <TitleP
//     title={content.description}
//     id={content.id}
//     paragraph={content.description}
//   />
// ))
const Box = () => {
  return <div>IMG</div>;
};

function Grounds({ title, paragraph }) {
  return (
    <div>
      <Layout>
        {/* <LogoBox logo1={{ Box }} /> */}
        <h1>Playground</h1>
        {/* {data} */}
      </Layout>
    </div>
  );
}

export default Grounds;
