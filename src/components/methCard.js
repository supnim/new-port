import React from "react";
import "../utils/css/components/card.scss";

const MethCard = ({ title, standfirst, icon }) => (
  <div className="methCard">
    {/* <img>{icon}</img> */}
    <h3 className="methTitle">{title}</h3>
    <p className="methParagraph">{standfirst}</p>
  </div>
);

export default MethCard;
