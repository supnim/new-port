import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TitleP from "../components/TitleP";
import Carousel from "../components/carousel";

import RedesignHero from "../../content/assets/heros/redesign_hero.svg";
import Timeline from "../../content/assets/projects/redesign/timeline.svg";
import CardIcon from "../components/cardIcon";
import One from "../../content/assets/projects/design-system/one.svg";
import Two from "../../content/assets/projects/design-system/two.svg";
import Three from "../../content/assets/projects/design-system/three.svg";
import Content from "../../content/assets/projects/redesign/content.svg";

function Redesign() {
  const image = useStaticQuery(graphql`
    query {
      alison: file(relativePath: { eq: "projects/redesign/alison.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dave: file(relativePath: { eq: "projects/redesign/dave.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      faye: file(relativePath: { eq: "projects/redesign/faye.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fiona: file(relativePath: { eq: "projects/redesign/fiona.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      joshua: file(relativePath: { eq: "projects/redesign/joshua.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      phoebe: file(relativePath: { eq: "projects/redesign/phoebe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      journey: file(relativePath: { eq: "projects/redesign/journey.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wireframe: file(relativePath: { eq: "projects/redesign/wireframe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      structure: file(relativePath: { eq: "projects/redesign/structure.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mood: file(relativePath: { eq: "projects/redesign/mood.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      live: file(relativePath: { eq: "projects/redesign/live.png" }) {
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
          title="Redesign"
          keywords={[
            `tes.com`,
            `redesign`,
            `homepage`,
            `rebuild`,
            `SaaS`,
            `sotfware`
          ]}
        />
        <RedesignHero width="100%" height="auto" />
        <div className="col-6" style={{ margin: "0 auto", padding: "2rem" }}>
          <TitleP
            title="Brief"
            paragraph={
              <p>
                redesign the homepage to better illustrate the new company
                goals. Which being, higher focus on B2B and
                internationalisation. <br />
                <br />
                previously looked like{" "}
                <a href="https://web.archive.org/web/20200613221639/https://www.tes.com/">
                  <b>this</b>
                </a>
              </p>
            }
          />
        </div>
        <div style={{ textAlign: "center", padding: "4rem" }}>
          <h3>Timeline</h3>
          <Timeline width="100%" height="auto" />
        </div>
        <section style={{ backgroundColor: "#F5F5F5", padding: "2rem" }}>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "4rem 0",
              textAlign: "center"
            }}
          >
            <h3 style={{ padding: "2rem" }}>Research</h3>
            <p>
              I started by hypothesising what our users are looking for when
              landing here and the problems that may face. Then I set out to
              interview a variety of school leader and teachers, primary and
              secondary, east to west making sure to cover any edge cases,
              therefore, allow me to have a solid base to go off.
              <br />
              <br />
              These are the learnings:
            </p>
          </div>

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
              description="Unclear on what exactly we do/provide for teacher and schools"
            />
            <CardIcon
              icon={<Two />}
              description="We come across as a UK first/only business"
            />
            <CardIcon
              icon={<Three />}
              description="no proof of how we have/could help"
            />
          </div>
        </section>
        <section>
          <div
            style={{
              width: "80%",
              margin: "4rem auto",
              textAlign: "center"
            }}
          >
            <TitleP
              title="Personas"
              paragraph="From the research conducted these where some of the personas formed"
            />
            <Carousel
              one={image.alison.childImageSharp.fluid}
              two={image.dave.childImageSharp.fluid}
              three={image.faye.childImageSharp.fluid}
              four={image.fiona.childImageSharp.fluid}
              five={image.joshua.childImageSharp.fluid}
            />
          </div>
        </section>
        <section>
          <div
            style={{
              margin: "8rem auto",
              textAlign: "center"
            }}
          >
            <TitleP
              title="UX"
              paragraph="Plotting the journey and structure."
            />
            <Img fluid={image.journey.childImageSharp.fluid} />
            <Img fluid={image.wireframe.childImageSharp.fluid} />
            <div style={{ maxWidth: "800xp", margin: "4rem" }}>
              <Img fluid={image.structure.childImageSharp.fluid} />
            </div>
          </div>
        </section>
        <section>
          <Content width="100%" height="auto" />

          <div
            style={{ maxWidth: "800xp", margin: "4rem", textAlign: "center" }}
          >
            <TitleP
              title="UI"
              paragraph="Adding art direction and life to the skeleton"
            />
            <Img fluid={image.mood.childImageSharp.fluid} />
          </div>
        </section>
        <section>
          <div
            style={{ maxWidth: "800xp", margin: "4rem", textAlign: "center" }}
          >
            <TitleP
              title="Launch"
              paragraph={
                <p>
                  through this redesign, we addressed all issues and
                  better-aligned ourselves for future moves. with a clear
                  explanation of who we are, what we do and how we can help you.
                  see live site <a href="https://www.tes.com">here</a>
                </p>
              }
            />
          </div>
          <Img fluid={image.live.childImageSharp.fluid} />
        </section>
      </Layout>
    </div>
  );
}

export default Redesign;
