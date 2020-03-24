import React from "react";
import "../utils/css/screen.css";

const videoBox = ({ description, url }) => (
  <div>
    <iframe
      title="videosComponent"
      src={url}
      width="800"
      height="450"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <p>{description}</p>
  </div>
);

export default videoBox;
