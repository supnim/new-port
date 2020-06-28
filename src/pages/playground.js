import React from "react";
import Layout from "../components/layout";
import LogoBox from "../components/logobox";
import { graphql, useStaticQuery } from "gatsby";

// const data = path.map((content) => (
//   <TitleP
//     title={content.description}
//     id={content.id}
//     paragraph={content.description}
//   />
// ))

function Grounds() {
  const logo = useStaticQuery(graphql`
    query {
      fhnw: file(relativePath: { eq: "projects/knowhere/FHNW.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      merz: file(relativePath: { eq: "projects/knowhere/merz.png" }) {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      southeast: file(
        relativePath: { eq: "projects/knowhere/southeast-uni.png" }
      ) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      swisscom: file(relativePath: { eq: "projects/knowhere/swisscom.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      northumbria: file(
        relativePath: { eq: "projects/knowhere/northumbria.png" }
      ) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div>
      <Layout>
        <h1>Playground</h1>
        <LogoBox
          one={logo.fhnw.childImageSharp.fixed}
          two={logo.swisscom.childImageSharp.fixed}
          three={logo.northumbria.childImageSharp.fixed}
          four={logo.southeast.childImageSharp.fixed}
          five={logo.merz.childImageSharp.fixed}
        />
      </Layout>
    </div>
  );
}

export default Grounds;
