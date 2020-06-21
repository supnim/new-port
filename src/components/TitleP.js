import React from "react";
function TitleP({ title, paragraph }) {
  return (
    <>
      <h1>{title}</h1>
      <p style={{ color: "#666666" }}>{paragraph}</p>
    </>
  );
}

export default TitleP;
