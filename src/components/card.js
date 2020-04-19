import React from "react";
import "../utils/css/components/card.scss";
import Img from "gatsby-image";

const Card = ({ cardImg, cardTitle, cardParagraphy }) => {
  // const styleV = {
  //   color: "red",
  //   margin: "40px"
  // }

  return (
    <div className="container vertical">
      <Img className="img" fluid={cardImg} />
      <div className="content">
        <h4 className="title">cardTitle{cardTitle}</h4>
        <p className="paragraphy">cardParagraphy{cardParagraphy}</p>
      </div>
    </div>
  );
};

export default Card;
