import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../../src/utils/css/project.scss";
import TitleP from "../components/TitleP";

const Primeday = () => {
  const image = useStaticQuery(graphql`
    query {
      boat: file(relativePath: { eq: "projects/primeday/boat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      date: file(relativePath: { eq: "projects/primeday/date.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doggy: file(relativePath: { eq: "projects/primeday/doggy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hair_spray: file(
        relativePath: { eq: "projects/primeday/hair_spray.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      july_alt: file(relativePath: { eq: "projects/primeday/july_alt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      july: file(relativePath: { eq: "projects/primeday/july.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plane: file(relativePath: { eq: "projects/primeday/plane.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      salt_pepper: file(
        relativePath: { eq: "projects/primeday/salt_pepper.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sofa: file(relativePath: { eq: "projects/primeday/sofa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      speaker: file(relativePath: { eq: "projects/primeday/speaker.jpg" }) {
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
        <Img fluid={image.plane.childImageSharp.fluid} />
        <div className="socialwrapper">
          <div className="row">
            <div className="col-12">
              <TitleP
                title="Aim"
                paragraph={
                  <p>
                    The biggest day of the year for Amazon, a huge ad campaign
                    to promote reduced prices and great offers. I was working
                    with the music team to create adverts and A/B testing
                    creative for all of EU. Along with supporting the wider team
                    to produce content for all channels.
                  </p>
                }
              />
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <Img fluid={image.boat.childImageSharp.fluid} className="col-6" />
            <Img fluid={image.date.childImageSharp.fluid} className="col-6" />
          </div>
          <div style={{ display: "flex" }}>
            <Img
              fluid={image.salt_pepper.childImageSharp.fluid}
              className="col-4"
            />
            <Img
              fluid={image.hair_spray.childImageSharp.fluid}
              className="col-4"
            />
            <Img
              fluid={image.speaker.childImageSharp.fluid}
              className="col-4"
            />
          </div>
          <div style={{ display: "flex" }}>
            <Img fluid={image.doggy.childImageSharp.fluid} className="col-6" />
            <Img
              fluid={image.july_alt.childImageSharp.fluid}
              className="col-6"
            />
          </div>
          <div style={{ display: "flex" }}>
            <Img fluid={image.july.childImageSharp.fluid} className="col-6" />
            <Img fluid={image.sofa.childImageSharp.fluid} className="col-6" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Primeday;
