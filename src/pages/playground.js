import React from "react";
import Layout from "../components/layout";
// import Hero from "../components/hero"
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

// import Project from "../templates/project"
// import Meth from "/Users/nimesh/Desktop/new-port/src/components/methData.js"
import MethCard from "../components/methCard";

const Grounds = () => {
  const image = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profilePic.jpg" }) {
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
        <div className="contactImg col-6">
          <figure className="aboutMePic">
            <Img
              className="aboutMePic"
              fluid={image.profilePic.childImageSharp.fluid}
            />
          </figure>
          <figcaption>UXCONFRENCE</figcaption>
          {/* <Meth /> */}
          <MethCard />
        </div>
      </Layout>
    </div>
  );
};

export default Grounds;
