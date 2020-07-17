import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import Hero from "../components/hero";
import TitleP from "../components/TitleP";
import VideoBox from "../components/videoBox";
import gif from "../components/gifs/volvic/volvic.gif";

const Volvic = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const siteTitle = data.site.siteMetadata.title;
  return (
    <div className="row">
      <Layout title={siteTitle}>
        <SEO
          title="volvic"
          keywords={[`discography`, `music`, `producer`, `N1M`]}
        />
        <img src={gif} alt="volvicgif" />
        <Hero
          heroImg=""
          heroTitle="Brief"
          heroParagraphy="To create a promotional video – it could be about anything we want it to be."
        />
        <div
          className="col-8"
          style={{
            alignItems: "center",
            textAlign: "center",
            padding: "0 4rem",
            width: "70%",
            margin: "0 auto"
          }}
        >
          <TitleP
            paragraph="After some research we decided on the drinks market.
                    All current ads where promoting energy and sugary drinks; we wanted to do something a little different. 
                    All elements of this project had to be considered, from making the music to shooting the clips and finally editing it together to make this video. This is what we made."
          />
          <VideoBox url="https://player.vimeo.com/video/163986212?title=0&byline=0&portrait=0" />
        </div>
      </Layout>
    </div>
  );
};

export default Volvic;

// gif not working
