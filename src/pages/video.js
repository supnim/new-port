import React from "react";
import { graphql, StaticQuery } from "gatsby";
import SEO from "../components/seo";
import "../utils/css/screen.css";
import Layout from "../components/layout";
import VideoBox from "../components/videoBox";
import path from "../components/videoPaths.js";

const Video = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const videoUrl = path.map(video => (
    <VideoBox description={video.description} url={video.url} id={video.id} />
  ));
  return (
    <div className="video-page">
      <Layout title={siteTitle}>
        <SEO
          title="videography"
          keywords={[`videography`, `film`, `director`, `editor`]}
        />
        <h3>videography</h3>
        <p>
          My second love - showed me the power of good storytelling.
          <br />
          Taught me; narration, sound-design, composition, tempo and much more.
        </p>
        {videoUrl}
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
    render={data => <Video location={props.location} data={data} {...props} />}
  />
);
