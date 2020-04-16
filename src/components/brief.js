import React from "react";
import { Link } from "gatsby";
import "../utils/css/components/brief.scss";

function Brief() {
  return (
    <section className="row">
      <div className="col-10 wrapper">
        <h4>Insight</h4>
        <p>
          people are more aware of what they consume, and are consciously taking
          action to change their lifestyle. with that said, these are the
          problems i've identified and solved through this idea.
        </p>
        <ol>
          <li>want to exercise and stay health.</li>
          <li>don't know what to eat.</li>
          <li>maximise produce and reduce waste.</li>
        </ol>
        <p className="superset">
          in addition it was important to me to make it as convenient as
          possible and have it working holistically within the amazon
          eco-system. <Link to={`/TBC`}> paper process </Link>
        </p>
      </div>
    </section>
  );
}

export default Brief;
