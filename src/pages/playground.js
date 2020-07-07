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

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

// const getImages = useStaticQuery(graphql`
//   query {
//     f1: file(relativePath: { eq: "projects/institute/route-1.png" }) {
//       childImageSharp {
//         fixed(width: 80) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     f2: file(relativePath: { eq: "projects/institute/route-2.png" }) {
//       childImageSharp {
//         fixed(width: 160) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     f3: file(relativePath: { eq: "projects/institute/route-3.png" }) {
//       childImageSharp {
//         fixed(width: 64) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     f4: file(relativePath: { eq: "projects/institute/route-4.png" }) {
//       childImageSharp {
//         fixed(width: 80) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     f5: file(relativePath: { eq: "projects/institute/route-5.png" }) {
//       childImageSharp {
//         fixed(width: 140) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `)

function Grounds() {
  const images = useStaticQuery(graphql`
    query {
      photo: allFile(filter: { relativeDirectory: { glob: "photography/*" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
                srcSet
                aspectRatio
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const photos = images.photo.edges.map(
    ({ node }) => node.childImageSharp.fluid
  );
  console.log(photos);

  // const slider = <AwesomeSlider media={photos.map(x => )} />

  return (
    <div>
      <Layout>
        <h1>Playground</h1>
        {/* {slider} */}
      </Layout>
    </div>
  );
}

export default Grounds;
