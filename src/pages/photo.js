import React from "react";
import Layout from "../components/layout";
import { graphql, StaticQuery } from "gatsby";

import SEO from "../components/seo";
import Gallery from "../components/gallery";
import Img from "gatsby-image";

const Photo = ({ Data }) => {
  const siteTitle = Data.site.siteMetadata.title;

  const imageData = graphql`
    query {
      profilePic: file(relativePath: { eq: "profilePic.jpg" }) {
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
  `;

  return (
    <div>
      <Layout title={siteTitle}>
        <SEO
          title="photos"
          keywords={[`photography`, `nightlife`, `fashion`, `band`]}
        />
        <h1>gallery goes here</h1>
        <Gallery />
        <Img fluid={imageData.profilePic.childrenImageSharp.fluid} />
      </Layout>
    </div>
  );
};

export default Photo;
