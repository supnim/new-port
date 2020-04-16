import React from "react";
import "../utils/css/components/card.scss";

const Card = () => {
  // const styleV = {
  //   color: "red",
  //   margin: "40px"
  // }

  return (
    <div className="container vertical">
      <div className="img">img</div>
      <div className="content">
        <h4 className="title">title of the thing</h4>
        <p className="paragraphy">here where all the words would go</p>
      </div>
    </div>
  );
};

export default Card;
