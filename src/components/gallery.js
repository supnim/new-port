import React from "react"
import "../utils/css/components/gallery.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Gallery() {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "images/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section>
      <div className="container-fluid">
        <div>
          <link rel="stylesheet" type="text/css" href="gallery.css" />
          <div className="masonry">
            <div className="item">
              <div className="item__content item">
                <Img fluid={data.fileName.childImageSharp.fluid} />
                <hp>image</hp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
