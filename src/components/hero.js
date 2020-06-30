import React from "react";
import Img from "gatsby-image";
import "../utils/css/components/hero.scss";

const hero = ({ heroImg, heroTitle, heroParagraphy }) => {
  // const nothing = (heroImg, heroTitle, heroParagraphy) => {
  //   if (!heroImg || !heroTitle || !heroParagraphy) {
  //     return null
  //   }
  //   return null
  // }

  return (
    <div className="hero-wrapper">
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
