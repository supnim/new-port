import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import CardRight from "../components/cardRight";
import Img from "gatsby-image";
import TitleP from "../components/TitleP";
import CardIcon from "../components/cardIcon";

import DesignSystemImg from "../../content/assets/heros/design_system_hero.svg";

import Clipboard from "../../content/assets/projects/design-system/clipboard.svg";
import Clock from "../../content/assets/projects/design-system/clock.svg";
import Plane from "../../content/assets/projects/design-system/paperplane.svg";
import One from "../../content/assets/projects/design-system/one.svg";
import Two from "../../content/assets/projects/design-system/two.svg";
import Three from "../../content/assets/projects/design-system/three.svg";
import Password from "../components/gifs/design-system/password.gif";
import Component from "../components/gifs/design-system/component.gif";
import Content from "../components/gifs/design-system/content.gif";

function DesignSystem() {
  const image = useStaticQuery(graphql`
    query {
      foundation: file(
        relativePath: { eq: "projects/design-system/foundation.png" }
      ) {
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
      type: file(relativePath: { eq: "projects/design-system/type.png" }) {
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
      elements: file(
        relativePath: { eq: "projects/design-system/elements.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      more: file(relativePath: { eq: "projects/design-system/more.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <Layout>
        <SEO
          title="Design System"
          keywords={[`product`, `designer`, `london`, `nimesh`]}
        />
        <DesignSystemImg width="100%" height="auto" />
        <section style={{ margin: "0 auto", padding: "2rem" }}>
          <div className="col-6" style={{ margin: "0 auto" }}>
            <TitleP
              title="Objective"
              paragraph={
                <p>
                  One single source of truth; forming unity across the whole
                  site and lay a stable foundation for onboarding future
                  businesses. <br />
                  <br />
                  The live design system can be found{" "}
                  <a href="https://www.tes.com/styleguide/">
                    <b>here</b>
                  </a>
                </p>
              }
            />
          </div>
          <h3 style={{ textAlign: "center", padding: "2rem" }}>Reasoning</h3>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "4rem 0",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              alignItems: "baseline"
            }}
          >
            <CardIcon
              icon={<Clipboard />}
              title="Standardisation"
              description="shared set of principles and rules to build consistent experiences across different platforms"
            />
            <CardIcon
              icon={<Clock />}
              title="Efficiency"
              description="enable designers & developers to reuse components"
            />
            <CardIcon
              icon={<Plane />}
              title="Scalability"
              description="efficiency and consistency leads to building faster products"
            />
          </div>
        </section>
        <section style={{ backgroundColor: "#F5F5F5", padding: "2rem" }}>
          <h3 style={{ textAlign: "center", padding: "2rem" }}>How ?</h3>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "4rem 0",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              alignItems: "baseline"
            }}
          >
            <CardIcon
              icon={<One />}
              description="shared set of principles and rules to build consistent experiences across different platforms"
            />
            <CardIcon
              icon={<Two />}
              description="enable designers & developers to reuse components"
            />
            <CardIcon
              icon={<Three />}
              description="efficiency and consistency leads to building faster products"
            />
          </div>
        </section>
        <section>
          <div>
            <CardRight
              key="1"
              image={image.foundation.childImageSharp.fluid}
              label="CORE"
              title="Foundation"
              description="This is the first and most important part of the design system; everything is built of this. Its mainly comprised of typography, colour and icons - the base of all that we're building off"
            />
          </div>
          <div style={{ backgroundColor: "#f5f5f5" }}>
            <CardRight
              key="2"
              image={image.type.childImageSharp.fluid}
              label="CORE"
              title="Typography"
              description="Typeface set & hierarchy"
            />
          </div>
          <div>
            <CardRight
              key="1"
              image={image.colour.childImageSharp.fluid}
              label="CORE"
              title="Colour"
              description="Total of 13 colour with tone and shades"
            />
          </div>
          <div style={{ backgroundColor: "#f5f5f5" }}>
            <CardRight
              key="2"
              image={image.icon.childImageSharp.fluid}
              label="CORE"
              title="Icon"
              description="100+ icons with 4 size varients 
              and all colour palette"
            />
          </div>
          <section style={{ textAlign: "center" }}>
            <TitleP
              title="Elements"
              paragraph="We're building on what we've built. combining multiple core parts to make more complex pieces"
            />
            <div>
              <Img fluid={image.elements.childImageSharp.fluid} />
            </div>
          </section>
          <section style={{ textAlign: "center" }}>
            <TitleP
              title="Components"
              paragraph="The final building blocks of the design system. an agreed-upon, unified component list used sitewide. Providing consistent and uniform designing, efficient engineering and changes that cascade through from one source of truth"
            />
            <div className="row">
              <div className="col-4">
                <img src={Content} alt="content components" />
              </div>
              <div className="col-4">
                <img src={Password} alt="library gif" />
              </div>
              <div className="col-4">
                <img src={Component} alt="more components" />
              </div>
            </div>
            <div>
              <Img fluid={image.more.childImageSharp.fluid} />
            </div>
          </section>
        </section>
      </Layout>
    </div>
  );
}

export default DesignSystem;
