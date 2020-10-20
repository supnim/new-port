import React from "react";
import { graphql, StaticQuery } from "gatsby";
import SEO from "../components/seo";
import "../utils/css/screen.css";
import Layout from "../components/layout";
import VideoBox from "../components/videoBox";
import path from "../components/videoPaths.js";

import ToolTip from "../components/toolTip";

const Video = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const videoUrl = path.map(video => (
    <VideoBox
      style={{
        backgroundColor: "whitesmoke",
        border: "8px solid black",
        boxShadow: "inset 0px 0px 0px 16px black",
        boxSizing: "border-box"
      }}
      description={video.description}
      url={video.url}
      id={video.id}
    />
  ));
  return (
    <div className="video-page">
      <Layout title={siteTitle}>
        <SEO
          title="videography"
          keywords={[`videography`, `film`, `director`, `editor`]}
        />
        <h3>videography</h3>
        <p style={{ paddingBottom: "8rem" }}>
          My second love - showed me the power of good storytelling.
          <br />
          Taught me; narration, sound-design, composition, tempo and much more.
          <br />
          <br />
          <ToolTip toolTipText="some of the videos have copyright music and therefore won't play on-site; click the title beneath to go to youtube :)">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="11" stroke="white" stroke-width="2" />
              <path
                d="M13.578 10.194V19.527H10.788V10.194H13.578ZM13.866 7.638C13.866 7.86 13.821 8.07 13.731 8.268C13.641 8.46 13.518 8.631 13.362 8.781C13.206 8.925 13.023 9.042 12.813 9.132C12.609 9.216 12.39 9.258 12.156 9.258C11.928 9.258 11.715 9.216 11.517 9.132C11.319 9.042 11.142 8.925 10.986 8.781C10.836 8.631 10.716 8.46 10.626 8.268C10.542 8.07 10.5 7.86 10.5 7.638C10.5 7.41 10.542 7.197 10.626 6.999C10.716 6.801 10.836 6.627 10.986 6.477C11.142 6.327 11.319 6.21 11.517 6.126C11.715 6.042 11.928 6 12.156 6C12.39 6 12.609 6.042 12.813 6.126C13.023 6.21 13.206 6.327 13.362 6.477C13.518 6.627 13.641 6.801 13.731 6.999C13.821 7.197 13.866 7.41 13.866 7.638Z"
                fill="white"
              />
            </svg>
          </ToolTip>
        </p>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>{videoUrl}</div>
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
