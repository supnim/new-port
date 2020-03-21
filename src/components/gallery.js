import React from "react"
import "../utils/css/components/gallery.scss"
import Img from "gatsby-image"

function Gallery() {
  return (
    <section>
      <div className="container-fluid">
        <div>
          <link rel="stylesheet" type="text/css" href="gallery.css" />
          <div className="masonry">
            <div className="item">
              <div className="item__content item">
                {/* <Img fluid={featuredImgFluid} /> */}
                <h1>image</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
