import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../../src/utils/css/project.scss";
import TravelHero from "../../content/assets/heros/travel_store_hero.svg";
import TitleP from "../components/TitleP";

const Travel = () => {
  const Frame = ({ id, title, link }) => {
    return (
      <div className="auto">
        {" "}
        <iframe
          className="iframeloading"
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
      <Layout title="Travel">
        <SEO
          title="Travel"
          keywords={[`travel`, `amazon`, `stop motion`, `facebook`]}
        />
        <TravelHero width="100%" height="auto" />
        <div className="socialwrapper">
          <div className="col-8">
            <TitleP
              title="Aim"
              paragraph="These animations were made to drive traffic to the new summer 2017 travel store. Each animation depicts different types of travel/holiday goers. Local versions of each idea to suit the EU market; UK, Germany, France, Italy and Spain were produced. Working together, an illustrator and I storyboarded, pitched and created these animations. Found this to be a great learning project, as, before this, I had no animating experience.more."
            />
          </div>
          <div className="row">
            <Frame
              id="1"
              title="adventure"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1983111175069669%2F&show_text=0&width=476"
            />
            <Frame
              id="2"
              title="beach"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1974139259300194%2F&show_text=0&width=476"
            />
            <Frame
              id="3"
              title="city & culture"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1977717762275677%2F&show_text=0&width=476"
            />
            <Frame
              id="4"
              title="travel with kids"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F2001741363206650%2F&show_text=0&width=476"
            />
            <Frame
              id="5"
              title="road trip"
              link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAmazonUK%2Fvideos%2F1986052184775568%2F&show_text=0&width=476"
            />
            <Frame
              id="6"
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
