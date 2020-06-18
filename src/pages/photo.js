import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";
import Gallery from "../components/gallery";

const Photo = () => {
  const siteTitle = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="video-page">
      <Layout title={siteTitle}>
        <SEO
          title="photos"
          keywords={[`photography`, `nightlife`, `fashion`, `band`]}
        />
        <h3>photography</h3>
        <p>My first love.</p>
        <Gallery />
      </Layout>
    </div>
  );
};

export default Photo;
