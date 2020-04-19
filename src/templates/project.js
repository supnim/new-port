import React from "react";
import "../utils/css/project.scss";
import Hero from "../components/hero";
import Brief from "../components/brief";
import Card from "../components/card";
import VideoBox from "../components/videoBox";

function template({
  //hero
  hero,
  heroTitle,
  heroParagraphy,
  // breif
  title,
  paragraphy,
  one,
  two,
  three,
  postscript,
  //card
  cardImg,
  cardTitle,
  cardParagraphy
}) {
  // const CardTemp = ({ cardImg, cardTitle, cardParagraphy }) => (
  //   <Card
  //     cardImg={cardImg}
  //     cardTitle={cardTitle}
  //     cardParagraphy={cardParagraphy}
  //   />
  // )
  return (
    <div>
      <Hero
        heroImg={hero}
        heroTitle={heroTitle}
        heroParagraphy={heroParagraphy}
      />
      <Brief
        briefTitle={title}
        briefParagraphy={paragraphy}
        one={one}
        two={two}
        three={three}
        postscript={postscript}
      />
      <container>
        <section className="row divid-2">
          <div className="col-6">
            <Card
              cardImg={cardImg}
              cardTitle={cardTitle}
              cardParagraphy={cardParagraphy}
            />
          </div>
          <div className="col-6">
            <Card
              cardImg={cardImg}
              cardTitle={cardTitle}
              cardParagraphy={cardParagraphy}
            />
          </div>
        </section>

        <section className="row divid-3">
          <div className="col-3">
            <Card
              cardImg={cardImg}
              cardTitle={cardTitle}
              cardParagraphy={cardParagraphy}
            />
          </div>

          <div className="col-3">
            <Card
              cardImg={cardImg}
              cardTitle={cardTitle}
              cardParagraphy={cardParagraphy}
            />
          </div>

          <div className="col-3">
            <Card
              cardImg={cardImg}
              cardTitle={cardTitle}
              cardParagraphy={cardParagraphy}
            />
          </div>
        </section>
        <section className="row full">
          <div className="col-12">
            <VideoBox
              src="https://www.youtube.com/watch?v=6bwmlRzt8TE"
              description="video"
            />
          </div>
        </section>
      </container>
    </div>
  );
}

export default template;
