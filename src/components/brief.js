import React from "react";
import { Link } from "gatsby";
import "../utils/css/components/brief.scss";

function Brief({ briefParagraphy, briefTitle, one, two, three, postscript }) {
  return (
    <section className="row">
      <div className="col-10 wrapper">
        <h4>{briefTitle}</h4>
        <p>{briefParagraphy}</p>
        <ol>
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
