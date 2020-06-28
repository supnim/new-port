import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import TravelHero from "../../content/assets/heros/travel_store_hero.svg";
import TitleP from "../components/TitleP";

const Travel = () => {
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
          title="travel"
          keywords={[`travel`, `amazon`, `stop motion`, `facebook`]}
        />
        <TravelHero width="100%" height="auto" />
        <div className="socialwrapper">
          <div className="col-8">
            <TitleP
              title="Aim"
              paragraph="these animations were made to drive traffic to the new summer 2017
            travel store. each animation depicts personas of different types of
            travel/ holiday goers. local versions of each idea to suit the eu
            market; uk, germany, france, italy and spain, were produced working
            together, me and an illustrator storyboarded, pitched and created
            these animations.found this to be a great learning project, as
            before this i had no animating experience."
            />
          </div>
          <div className="row">
            <Frame
              title="adventure"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1983111175069669%2F&show_text=0&width=476"
            />
            <Frame
              title="beach"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1974139259300194%2F&show_text=0&width=476"
            />
            <Frame
              title="city & culture"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1977717762275677%2F&show_text=0&width=476"
            />
            <Frame
              title="travel with kids"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F2001741363206650%2F&show_text=0&width=476"
            />
            <Frame
              title="road trip"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1986052184775568%2F&show_text=0&width=476"
            />
            <Frame
              title="festival"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1991380820909371%2F&show_text=0&width=476"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Travel;
