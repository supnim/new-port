import React from "react";
import Img from "gatsby-image";

const LogoBox = ({ logo1, logo2, logo3, logo4, logo5 }) => {
  return (
    <div className="row">
      <Img fixed={logo1} />
      <Img fixed={logo2} />
      <Img fixed={logo3} />
      <Img fixed={logo4} />
      <Img fixed={logo5} />
    </div>
  );
};

export default LogoBox;
