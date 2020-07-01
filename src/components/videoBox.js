import React from "react";
import "../utils/css/screen.css";

const videoBox = ({ description, url }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px 0"
    }}
  >
    <iframe
      title="videosComponent"
      src={url}
      width="100%"
      height="450"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <p style={{ textAlign: "center", padding: "32px" }}>{description}</p>
  </div>
);

export default videoBox;
