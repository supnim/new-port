import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import CardLeft from "../components/cardLeft";
import CardRight from "../components/cardRight";
import Img from "gatsby-image";
import TitleP from "../components/TitleP";

import InstituteImg from "../../content/assets/heros/institute_hero.svg";
import Password from "../components/gifs/design-system/password.gif";
import Component from "../components/gifs/design-system/component.gif";
import Content from "../components/gifs/design-system/content.gif";
import More from "../../content/assets/projects/design-system/component-more.svg";

function OneCard() {
  const image = useStaticQuery(graphql`
    query {
      button: file(relativePath: { eq: "projects/design-system/button.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      colour: file(relativePath: { eq: "projects/design-system/colour.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      element: file(
        relativePath: { eq: "projects/design-system/element.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fields: file(relativePath: { eq: "projects/design-system/fields.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fieldsstates: file(
        relativePath: { eq: "projects/design-system/fieldsstates.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      icon: file(relativePath: { eq: "projects/design-system/icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      typography: file(
        relativePath: { eq: "projects/design-system/typography.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  function BriefAlt() {
    return (
      <section className="row">
        <div
          className="wrapper"
          style={{
            margin: "4rem auto",
            color: "black",
            backgroundColor: "white",
            border: "2px black solid",
            margin: "4rem"
          }}
        >
          <h4>Brief</h4>
          <p>
            give institute a facelift/rebranding. tes institute is a leading
            provider of online courses and programmes with a particular focus on
            teacher training and development this is what it looked like before:{" "}
            <a href="https://web.archive.org/web/20200513133158/https://www.tes.com/institute/">
              <b>this</b>
            </a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <div>
      <Layout>
        <SEO
          title="Institute"
          keywords={[`product`, `designer`, `london`, `nimesh`]}
        />
        <InstituteImg width="100%" height="auto" />
        {BriefAlt()}
        <section className="row full">
          <div className="col-12">
            <CardLeft
              key="1"
              image={image.typography.childImageSharp.fluid}
              title="core"
              description="this is the first and most important part of the design system; everything is built of this. its mainly comprised of typography, colour and icons"
            />
            <div className="row">
              <div className="col-6">
                <Img fluid={image.colour.childImageSharp.fluid} />
              </div>
              <div className="col-6">
                <Img fluid={image.icon.childImageSharp.fluid} />
              </div>
            </div>
            <CardRight
              key="2"
              image={image.element.childImageSharp.fluid}
              title="elements"
              description="we're building on what we've built. combining multiple core parts to make more complex pieces"
            />
            <div className="row">
              <div className="col-6">
                <Img fluid={image.fields.childImageSharp.fluid} />
              </div>
              <div className="col-6">
                <Img fluid={image.fieldsstates.childImageSharp.fluid} />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Img fluid={image.element.childImageSharp.fluid} />
              </div>
              <div className="col-6">
                <img src={Password} />
              </div>
            </div>
            <div className="row">
              <div className="col-6" style={{ backgroundColor: "#F5F5F5" }}>
                <img src={Component} />
              </div>
              <div
                className="col-6"
                style={{ margin: "auto", padding: "5rem" }}
              >
                <TitleP
                  title="Component"
                  paragraph="the final building blocks of the design system. an agreed-upon, unified component list used sitewide. providing consistent and uniform designing, efficient engineering and changes that cascade through from one source of truth"
                />
              </div>
            </div>
            <div className="row" style={{ backgroundColor: "#F5F5F5" }}>
              <div className="col-6">
                <img src={Content} />
              </div>
              <div
                className="col-6"
                style={{ margin: "auto", padding: "5rem" }}
              >
                <More width="100%" height="100%" />
              </div>
            </div>
            <div className="row">
              <div className="col-12" style={{ margin: "4rem" }}>
                <TitleP
                  title="What's next?"
                  paragraph="layout libraries, baking in motion, further implementation of accessibility, creating user journey ( e.g checkout / onboarding ) and aligning marketing and editorial style guides "
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default OneCard;
