import React from "react";
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import "../utils/css/components/hero.scss";

const hero = () => {
  return (
    <div className="container">
      <div className="hero-image">
        {/* <figure className="kg-card kg-image-card">
            <Img
                fluid={data.smallPic.childImageSharp.fluid}
                className="kg-image"/>
        <figcaption>Regular image</figcaption>
        </figure> */}
      </div>
      <div className="intro">
        <h4>Brief</h4>
        <p>
          Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
          porttitor sem non mi integer non faucibus ornare mi ut ante amet
          placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
          varius montes viverra nibh in adipiscing blandit tempus accumsan.
        </p>
      </div>
    </div>
  );
};

export default hero;
