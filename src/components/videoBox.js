import React from "react";
import "../utils/css/screen.css";

const videoBox = ({ description, url }) => (
  <div className="video">
    <iframe src={url} width="800" height="400"></iframe>
    <p>{description}</p>
  </div>
);

export default videoBox;
