import React from "react";
import "../utils/css/components/brief.scss";

function Brief({ title, paragraph, one, two, three, postscript, style }) {
  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto" }} className="row">
      <div className="col-12 wrapper" style={style}>
        <h4>{title}</h4>
        <p>{paragraph}</p>
        <ol className="list">
          <li>{one}</li>
          <li>{two}</li>
          <li>{three}</li>
        </ol>
        <p className="superset">{postscript}</p>
      </div>
    </section>
  );
}

export default Brief;
