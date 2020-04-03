import React from "react";
import Layout from "../components/layout";
import { graphql, StaticQuery } from "gatsby";

import SEO from "../components/seo";
import Gallery from "../components/gallery";
import Img from "gatsby-image";

const Photo = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  // const Image = graphql`
  //   query {
  //     allImageSharp {
  //       edges {
  //         node {
  //           fluid(maxWidth: 320) {
  //             src
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   }
  // `

  return (
    <div>
      <Layout title={siteTitle}>
        <SEO
          title="photos"
          keywords={[`photography`, `nightlife`, `fashion`, `band`]}
        />
        <h1>gallery goes here</h1>
        <Gallery />
        {/* <Img fluid={photos.allImage.imageSharp.fluid} /> */}
      </Layout>
    </div>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => <Photo location={props.location} data={data} {...props} />}
  />
);
