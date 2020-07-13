import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TitleP from "../components/TitleP";
import Brief from "../components/brief";

import SchoolImg from "../../content/assets/heros/tes_for_schools_hero.svg";

function School() {
  const image = useStaticQuery(graphql`
    query {
      end1: file(relativePath: { eq: "projects/schools/end1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      end2: file(relativePath: { eq: "projects/schools/end2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      end3: file(relativePath: { eq: "projects/schools/end3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      end4: file(relativePath: { eq: "projects/schools/end4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      old1: file(relativePath: { eq: "projects/schools/oldtes1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      old2: file(relativePath: { eq: "projects/schools/oldtes2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      part1: file(relativePath: { eq: "projects/schools/part1.png" }) {
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
          title="Tes for schools"
          keywords={[`education`, `software`, `service`, `subscription`]}
        />
        <SchoolImg width="100%" height="auto" />
        <Brief
          title="Aim"
          paragraph={
            <p>
              To redesign the ‘Recruit with Tes’ page as this is what would be
              used to sell schools services around the global.
            </p>
          }
          one="simplify the journey"
          two="produce a look and feel of a modern business"
          three="get our offering out"
        />
        <section className="row full">
          <div
            className="col-12"
            style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 0" }}
          >
            <div className="row">
              <div
                style={{ margin: "auto", textAlign: "center", padding: "5rem" }}
              >
                <TitleP
                  title="Starting point"
                  paragraph="This is what it looked like before we started, heavy on the content front and quite hard to digust"
                />
              </div>
              <div
                className="col-6"
                style={{ backgroundColor: "#EFF7FB", padding: "2rem" }}
              >
                <Img fluid={image.old1.childImageSharp.fluid} />
              </div>
              <div
                className="col-6"
                style={{ backgroundColor: "#EFF7FB", padding: "2rem" }}
              >
                <Img fluid={image.old2.childImageSharp.fluid} />
              </div>
            </div>
            <div className="row">
              <div
                style={{ margin: "auto", textAlign: "center", padding: "5rem" }}
              >
                <TitleP
                  title="Redesign"
                  paragraph="my aim was to give the page a face lift and curate a better user experience that improves salesforce ability to gather better leads and for head teachers to learn more about the product and services that tes offer. the first version i made was a simple components basic website - with some variations that would make up most of the site with the outcome below:"
                />
              </div>
              <div className="col-6">
                <Img fluid={image.end1.childImageSharp.fluid} />
              </div>
              <div className="col-6">
                <Img fluid={image.end2.childImageSharp.fluid} />
              </div>
              <div className="col-6">
                <Img fluid={image.end3.childImageSharp.fluid} />
              </div>
              <div className="col-6">
                <Img fluid={image.end4.childImageSharp.fluid} />
              </div>
            </div>
            <div className="row">
              {" "}
              <div
                style={{ margin: "auto", textAlign: "center", padding: "5rem" }}
              >
                <TitleP
                  title="Conclusion: failed"
                  paragraph={
                    <p>
                      What we found out that we were using a lot of the same
                      components in out projects, with that understanding, I
                      worked closely with the marketing team to create a better
                      system which led to the creation of the{" "}
                      <a href="/pagebuilder">CMS (pagebuilder)</a>.
                    </p>
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default School;
