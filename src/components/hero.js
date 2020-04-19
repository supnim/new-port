import React from "react";
// import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import "../utils/css/components/hero.scss";

const hero = ({ heroImg, heroTitle, heroParagraphy }) => {
  return (
    <div className="container">
      <div className="hero-image">
        <Img fluid={heroImg} />
      </div>
      <div className="intro">
        <h4>{heroTitle}</h4>
        <p>{heroParagraphy}</p>
      </div>
    </div>
  );
};

export default hero;
