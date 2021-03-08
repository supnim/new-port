import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../../src/utils/css/project.scss";
import TitleP from "../components/TitleP";

import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import battery from "../components/gifs/doodle/battery.gif";
import coffee from "../components/gifs/doodle/coffee.gif";
import engage from "../components/gifs/doodle/engage.gif";
import euro from "../components/gifs/doodle/euro.gif";
import grandad from "../components/gifs/doodle/grandad.gif";
import kettle from "../components/gifs/doodle/kettle.gif";
import light from "../components/gifs/doodle/light.gif";
import moon from "../components/gifs/doodle/moon.gif";
import radio from "../components/gifs/doodle/radio.gif";
import santa_hat from "../components/gifs/doodle/santa_hat.gif";
import santa from "../components/gifs/doodle/santa.gif";
import stocking from "../components/gifs/doodle/stocking.gif";
import tea from "../components/gifs/doodle/tea.gif";

const Alexa = () => {
  const image = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "gifs/doodle/tube.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="">
      <Layout title="Alexa">
        <SEO title="Alexa" keywords={[`advert`, `amazon`, `campaign`]} />
        <Img fluid={image.profilePic.childImageSharp.fluid} />
        <div className="socialwrapper">
          <div className="row">
            <div className="col-12">
              <TitleP
                title="Aim"
                paragraph={
                  <p>
                    To promote Alexa and all its use. <br />
                    This was a global campaign launched around christmas time.{" "}
                    <br />
                    It was a hugely collaborative piece of work, with many
                    creatives, hundreds of hours, thousands of ideas. <br />
                    My part was to help ideate and deliver the artwork to suit
                    all channels in Europe
                    <br />
                    <br />
                    p.s the Santa stuck in the chimney is mine.
                  </p>
                }
              />
            </div>
          </div>
          <section>
            <div>
              <img src={battery} className="col-3" alt="battery" />
              <img src={coffee} className="col-3" alt="coffee" />
              <img src={engage} className="col-3" alt="engage" />
              <img src={euro} className="col-3" alt="euro" />
            </div>
            <div>
              <img src={grandad} className="col-3" alt="grandad" />
              <img src={kettle} className="col-3" alt="kettle" />
              <img src={tea} className="col-3" alt="tea" />
              <img src={moon} className="col-3" alt="moon" />
            </div>
            <div>
              <img src={radio} className="col-3" alt="radio" />
              <img src={santa_hat} className="col-3" alt="santa_hat" />
              <img src={santa} className="col-3" alt="santa" />
              <img src={stocking} className="col-3" alt="stocking" />
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Alexa;
