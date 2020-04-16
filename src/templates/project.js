import React from "react";
import "../utils/css/project.scss";
import Hero from "../components/hero";
import Brief from "../components/brief";
import Card from "../components/card";
import VideoBox from "../components/videoBox";

function template() {
  return (
    <div>
      <Hero />
      <Brief />
      <container>
        <section className="row divid-2">
          <div className="col-6">
            <Card />
          </div>
          <div className="col-6">
            <Card />
          </div>
        </section>

        <section className="row divid-3">
          <div className="col-3">
            <Card />
          </div>

          <div className="col-3">
            <Card />
          </div>

          <div className="col-3">
            <Card />
          </div>
        </section>
        <section className="row full">
          <div className="col-12">
            <VideoBox
              src="https://www.youtube.com/watch?v=6bwmlRzt8TE"
              description="vdeio cilip"
            />
          </div>
        </section>
      </container>
    </div>
  );
}

export default template;
