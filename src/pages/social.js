import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";

const Social = () => {
  const siteTitle = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const Frame = ({ title, link }) => {
    return (
      <div className="auto">
        {" "}
        <iframe
          src={link}
          width="476"
          height="476"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allowFullScreen="true"
        ></iframe>
        <h6 style={{ textAlign: "center", marginTop: "2rem" }}>{title}</h6>
      </div>
    );
  };
  return (
    <div className="">
      <Layout title={siteTitle}>
        <SEO
          title="social"
          keywords={[`social`, `amazon`, `stop motion`, `facebook`]}
        />
        <div className="socialwrapper">
          <h3>Social</h3>
          <p>Short form content for facebook and twitter</p>
          <div className="row">
            <Frame
              title="Back to school"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F2095659293814856%2F&show_text=0&width=476"
            />
            <Frame
              title="Tidy home, tidy mind"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1922808147766639%2F&show_text=0&width=476"
            />
            <Frame
              title="#throwbackthursday"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1920780491302738%2F&show_text=0&width=476"
            />
            <Frame
              title="British science week 2017"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1917999824914138%2F&show_text=0&width=476"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Social;
