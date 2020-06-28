import React from "react";
import Img from "gatsby-image";

const LogoBox = ({ one, two, three, four, five }) => {
  return (
    <div className="row logobox">
      <Img fixed={one} />
      <Img fixed={two} />
      <Img fixed={three} />
      <Img fixed={four} />
      <Img fixed={five} />
    </div>
  );
};

export default LogoBox;
