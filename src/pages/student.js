import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import StudentHero from "../../content/assets/heros/music_for_students_hero.svg";
import TitleP from "../components/TitleP";

const Student = () => {
  const siteTitle = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const HeroImage = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fffc00"
        }}
      >
        <StudentHero width="80%" height="auto" />
      </div>
    );
  };
  const Frame = ({ id, title, link }) => {
    return (
      <div className="auto">
        {" "}
        <iframe
          title={id}
          src={link}
          width="480"
          height="480"
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
          title="Music for students"
          keywords={[`music`, `amazon`, `students`, `promo`]}
        />
        <div style={{ backgroundColor: "yellow", alignContent: "end" }}>
          <HeroImage />
        </div>
        <div className="socialwrapper">
          <div className="col-8">
            <TitleP
              title="Brief"
              paragraph="to create ads to inform students of the features and the offer that is on.

              this was a wonderful collaborative project, with many parts. i and another creative worked together to ideate on demonstration these features - taking into consideration of our target audience which was students and how to appeal to them. for that matter, the style had to be eye-grabbing and scroll stopping. after storyboarding the idea it was taken to animators. where they rotoscoped footage i shot of members of the team. 
              
              involved: ad's, head of social, campaign managers, amazon music team and numerous others."
            />
          </div>
          <div className="row">
            <Frame
              id="1"
              title="Save data"
              link="https://player.vimeo.com/video/233477595?title=0&byline=0&portrait=0"
            />
            <Frame
              id="2"
              title="Device"
              link="https://player.vimeo.com/video/233477582?title=0&byline=0&portrait=0"
            />
            <Frame
              id="3"
              title="No ads"
              link="https://player.vimeo.com/video/233477589?title=0&byline=0&portrait=0"
            />
            <Frame
              id="4"
              title="Songs"
              link="https://player.vimeo.com/video/233477606?title=0&byline=0&portrait=0"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Student;