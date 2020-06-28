import React from "react";
import "../utils/css/components/card.scss";
import Img from "gatsby-image";

const Card = ({ image, title, byline, description }) => {
  return (
    <div className="side flip">
      <div className="col-6">
        {image && <Img className="img" fluid={image} />}
      </div>
      <div className="content col-6">
        <h3 className="titleAlt">{title}</h3>
        <h6 className="byline">{byline}</h6>
        <p className="paragraphAlt">{description}</p>
      </div>
    </div>
  );
};
export default Card;