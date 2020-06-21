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
    <div className="photo-page">
      <Layout title={siteTitle}>
        <SEO
          title="photography"
          keywords={[`photography`, `nightlife`, `fashion`, `band`, `supnim`]}
        />
        <h3>photography</h3>
        <p>My first love.</p>
        <Gallery />
      </Layout>
    </div>
  );
};

export default Photo;
