import React from "react";
import "../utils/css/components/meth.scss";

const MethCard = props => (
  <div className="methCard">
    <div className="methImg">{props.icon}</div>
    <h3 className="methTitle">{props.title}</h3>
    <p className="methParagraph">{props.standfirst}</p>
  </div>
);

export default MethCard;
