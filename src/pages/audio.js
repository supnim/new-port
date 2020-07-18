import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";

const Audio = () => {
  const siteTitle = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="audio-page">
      <Layout title={siteTitle}>
        <SEO
          title="discography"
          keywords={[`discography`, `music`, `producer`, `N1M`]}
        />
        <h3>discography</h3>
        <p style={{ paddingBottom: "8rem" }}>
          My newest passion. Latest to the earliest; left to right.
        </p>
        <div className="discography row">
          <div className="auto">
            <iframe
              className="iframeloading"
              title="JAIN"
              src="https://open.spotify.com/embed/track/1iZspYCLfqzaxzVUFAdw9O"
              width="100%"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div className="auto">
            <iframe
              className="iframeloading"
              title="BACK2SCHOOL"
              src="https://open.spotify.com/embed/track/2lxNDEE2DJKZAsgpEQzImx"
              width="100%"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div className="auto">
            <iframe
              className="iframeloading"
              title="A-STARR"
              width="100%"
              height="380"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/587439762&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <div className="auto">
            <iframe
              className="iframeloading"
              title="Carol of NIM"
              width="100%"
              height="380"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/549527580&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Audio;
