import React from "react";
import "../utils/css/components/gallery.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function Gallery() {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "../images/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);

  return (
    <section>
      <div className="container-fluid">
        <div>
          <link rel="stylesheet" type="text/css" href="gallery.css" />
          <div className="masonry">
            <div className="item">
              <div className="item__content item">
                {/* <Img fluid={data.fileName.childImageSharp.fluid} /> */}
                <h1>image</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
