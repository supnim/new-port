import React from "react";
import "../utils/css/components/card.scss";
import Img from "gatsby-image";

const Card = ({ cardImg, cardTitle, cardParagraph }) => {
  return (
    <div className="container vertical">
      {cardImg && <Img className="img" fluid={cardImg} />}
      <div className="content">
        <h4 className="title">{cardTitle}</h4>
        <p className="paragraphy">{cardParagraph}</p>
      </div>
    </div>
  );
};

export default Card;
