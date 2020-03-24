import React from "react";
import Layout from "../components/layout";
import { graphql, StaticQuery } from "gatsby";

import SEO from "../components/seo";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import Card from "../components/card";

import VideoBox from "../components/videoBox";
import path from "../components/videoPaths.js";

const Photo = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  const videoChoose = path.filter(
    videoId => videoId.url === "https://www.youtube.com/embed/EEJy-wmabiA"
  );
  console.log("THIS IS THE CONSOLE LOG", videoChoose);
  // expected output: Array ["exuberant", "destruction", "present"]

  return (
    <div>
      <Layout title={siteTitle}>
        <SEO
          title="photos"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Gallery />
        <Hero />
        <div>
          <div className="full">
            <Card />
            {/* {videoChoose} */}
            {/* <VideoBox /> */}
          </div>
          <div className="row">
            <div className="col-4">
              <Card />
            </div>
            <div className="col-4">
              <Card />
            </div>
            <div className="col-4">
              <Card />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => <Photo location={props.location} data={data} {...props} />}
  />
);
