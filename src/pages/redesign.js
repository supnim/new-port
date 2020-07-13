import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TitleP from "../components/TitleP";
import Brief from "../components/brief";

function Redesign() {
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
          title="tes.com redesign"
          keywords={[`tes.com`, `redesign`, `homepage`, `rebuild`]}
        />
        <section
          className="row full"
          style={{ height: "100vh", backgroundColor: "black" }}
        >
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              color: "lightgrey",
              padding: "5rem"
            }}
          >
            <TitleP
              title="WIP"
              paragraph="project under construction currently"
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Redesign;
