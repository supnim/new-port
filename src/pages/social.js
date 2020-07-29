import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import Brief from "../components/brief";

import SocialHero from "../../content/assets/heros/social_hero.svg";

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
  const Frame = ({ id, title, link }) => {
    return (
      <div className="auto">
        {" "}
        <iframe
          className="iframeloading"
          loading="lazy"
          title={id}
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
          keywords={[
            `social`,
            `amazon`,
            `stop motion`,
            `facebook`,
            `twitter`,
            `360`,
            `art direction`
          ]}
        />
        <SocialHero width="100%" height="80%" />
        <Brief
          title="Aim"
          paragraph="when working on the social vertical, I was set the task to organise, order, ideate, create, edit and publish content across all social platform according to each and every upcoming event — here are some"
        />
        <div className="socialwrapper">
          <div className="row">
            <Frame
              id="1"
              title="Back to school"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F2095659293814856%2F&show_text=0&width=476"
            />
            <Frame
              id="2"
              title="Tidy home, tidy mind"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1922808147766639%2F&show_text=0&width=476"
            />
            <Frame
              id="3"
              title="#throwbackthursday"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1920780491302738%2F&show_text=0&width=476"
            />
            <Frame
              id="4"
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
