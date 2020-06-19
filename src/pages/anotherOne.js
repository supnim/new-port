import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import CardLeft from "../components/cardLeft";
import CardRight from "../components/cardRight";
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
        <CardLeft
          key="1"
          image={image.methBG.childImageSharp.fluid}
          title="all purpose one card"
          description="the idea was to eradicate the wallet. we are moving into an era of contact-less payment and to innovate further and aid in this this was our answer: a multi-purpose card."
        />
        <CardRight
          key="1"
          image={image.methBG.childImageSharp.fluid}
          title="all purpose one card"
          description="the idea was to eradicate the wallet. we are moving into an era of contact-less payment and to innovate further and aid in this this was our answer: a multi-purpose card."
        />
      </Layout>
    </div>
  );
};

export default Play;
