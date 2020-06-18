import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Play = () => {
  const image = useStaticQuery(graphql`
    query {
      methBG: file(relativePath: { eq: "methBackgrounds/design.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <Layout>
        <h1>AnotherOne</h1>
        <Img fluid={image.methBG.childImageSharp.fluid} />
      </Layout>
    </div>
  );
};

export default Play;
