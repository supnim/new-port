import React from "react";
import "../utils/css/components/gallery.scss";
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

function Gallery({ url, caption }) {
  return (
    <section>
      <div className="container-fluid">
        <div>
          <link rel="stylesheet" type="text/css" href="gallery.css" />
          <div className="masonry">
            <div className="item">
              <div className="item__content item">
                <Img fluid={url} />
                <hp>image</hp>
                <h1>{caption}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
