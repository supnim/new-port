import React from "react";
import Img from "gatsby-image";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

function Slide({
  one,
  two,
  three,
  four,
  five,
  oneAlt,
  twoAlt,
  threeAlt,
  fourAlt,
  fiveAlt,
  style
}) {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <Img fluid={one} />
          <Carousel.Caption>
            <b style={style}>{oneAlt}</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={two} />
          <Carousel.Caption>
            <b style={style}>{twoAlt}</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={three} />
          <Carousel.Caption>
            <b style={style}>{threeAlt}</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={four} />
          <Carousel.Caption>
            <b style={style}>{fourAlt}</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={five} />
          <Carousel.Caption>
            <b style={style}>{fiveAlt}</b>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export default Slide;
