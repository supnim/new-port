import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import CardLeft from "../components/cardLeft";
import CardRight from "../components/cardRight";
import TitleP from "../components/TitleP";
import Brief from "../components/brief";
import Carousel from "../components/carousel";
import Card from "../components/card";
import Img from "gatsby-image";

import PagebuilderImg from "../../content/assets/heros/pagebuilder_hero.svg";
import Time from "../../content/assets/projects/pagebuilder/time.svg";
import Autonomy from "../../content/assets/projects/pagebuilder/autonomy.svg";
import Consistency from "../../content/assets/projects/pagebuilder/consistency.svg";

function Pagebuilder() {
  const image = useStaticQuery(graphql`
    query {
      design: file(
        relativePath: { eq: "projects/pagebuilder/design-system.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      drupal: file(relativePath: { eq: "projects/pagebuilder/drupal.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flex: file(relativePath: { eq: "projects/pagebuilder/flexibility.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      configure: file(
        relativePath: { eq: "projects/pagebuilder/configure.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      structure: file(
        relativePath: { eq: "projects/pagebuilder/structure.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      example1: file(
        relativePath: { eq: "projects/pagebuilder/example1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      example2: file(
        relativePath: { eq: "projects/pagebuilder/example2.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      example3: file(
        relativePath: { eq: "projects/pagebuilder/example3.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wip: file(relativePath: { eq: "projects/pagebuilder/wip.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const briefStyle = {
    margin: "4rem auto",
    color: "black",
    backgroundColor: "white",
    border: "2px black solid",
    padding: "4rem"
  };

  return (
    <div>
      <Layout>
        <SEO
          title="Pagebuilder"
          keywords={[`CMS`, `Drupal`, `management`, `content`, `system`]}
        />
        <PagebuilderImg width="100%" height="auto" />
        <Brief
          style={briefStyle}
          title="Aim"
          paragraph={
            <p>
              to build a cms which in turn removes dependency and create
              autonomy – basing it of the{" "}
              <a href="/design-system">
                <b>design system </b>
              </a>
              to form consistency and site-wide unity.
            </p>
          }
        />
        <section
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 0" }}
        >
          <div style={{ padding: "2rem" }}>
            <TitleP
              title="Why"
              paragraph={
                <p>
                  while making{" "}
                  <a href="/institute">
                    <b>Institute</b>
                  </a>{" "}
                  and{" "}
                  <a href="/school">
                    <b>Tes for schools</b>
                  </a>{" "}
                  we realise this isn't an efficient way of working; creating
                  bespoke pages each time Content, Marketing or Institute wanted
                  one. It would be much better to create a toolset that allowed
                  them to create and manage their own pages, without relying on
                  anyone.
                  <br />
                  <i>
                    Give a man a fish and you feed him for a day; teach a man to
                    fish and you feed him for a lifetime type move.
                  </i>
                </p>
              }
            />
          </div>

          <div
            style={{
              padding: "4rem 0",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap"
            }}
          >
            <Time />
            <Autonomy />
            <Consistency />
          </div>
          <div style={{ padding: "2rem" }}>
            <h3>How?</h3>
            <div
              style={{
                display: "flex",

                justifyContent: "space-evenly",
                alignItems: "center"
              }}
            >
              <Card
                image={image.design.childImageSharp.fluid}
                title="Design System"
              />
              <p style={{ fontSize: "56px", color: "lightgrey" }}>+</p>
              <Card
                image={image.drupal.childImageSharp.fluid}
                title="Drupal + Layout"
              />
            </div>
          </div>
          <section className="row full">
            <div className="col-12">
              <CardLeft
                key="1"
                image={image.flex.childImageSharp.fluid}
                title="Flexibility"
                description="All components are designed with all breakpoints considered and how they’d behaviour with other components in the same section."
              />
              <br />
              <CardRight
                key="2"
                image={image.configure.childImageSharp.fluid}
                title="Configure"
                description="The controller: in this panel the user chooses and creates the content that is populated in on the page.
                  Everything from, titles to forms to carousels to SVGs."
              />
              <br />
              <CardLeft
                key="1"
                image={image.structure.childImageSharp.fluid}
                title="Structure"
                description="We worked together with all the stakeholders ( Marketing, Institute & Editorial ) to build a flexible yet structurally sound layout with potential infinity combination — this was important to us to allow all parties to create with as little restriction as possible."
              />
              <div style={{ padding: "2rem" }}>
                <h3>Output</h3>
                <Carousel
                  style={{ color: "black" }}
                  one={image.example1.childImageSharp.fluid}
                  oneAlt="One"
                  two={image.example2.childImageSharp.fluid}
                  twoAlt="Two"
                  three={image.example3.childImageSharp.fluid}
                  threeAlt="Three"
                  four={image.example1.childImageSharp.fluid}
                  fourAlt=""
                  five={image.example2.childImageSharp.fluid}
                  fiveAlt=""
                />
              </div>
            </div>
          </section>
        </section>
        <br />
        <div
          className="row"
          style={{
            backgroundColor: "#F5F5F5",
            padding: "4rem"
          }}
        >
          <div
            style={{
              textAlign: "center",
              margin: "0 auto",
              width: "70%"
            }}
          >
            <TitleP
              title="Next in version 2"
              paragraph="Our aim was to make the shop window amazing for the final user, and once MVP was launched; work with the internal team to arrange and polish in the shop if you will. Below are some of the feature we plan to implement"
            />
          </div>
        </div>
        <Img
          fluid={image.wip.childImageSharp.fluid}
          alt="working in progress"
        />
      </Layout>
    </div>
  );
}

export default Pagebuilder;
