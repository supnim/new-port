import React from "react";
import Img from "gatsby-image";
import Carousel from "react-bootstrap/Carousel";
import { graphql, useStaticQuery } from "gatsby";
import "../utils/css/components/carousel.css";

function Slide() {
  const image = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "projects/institute/home.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cat: file(relativePath: { eq: "projects/institute/courses-cat.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      page: file(relativePath: { eq: "projects/institute/course-page.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      map: file(relativePath: { eq: "projects/institute/sitemap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const style = {
    color: "white",
    border: "4px solid #870AF3",
    backgroundColor: "#870AF3"
  };

  return (
    <section style={{ border: "2px solid #870AF3" }}>
      <Carousel>
        <Carousel.Item>
          <Img fluid={image.map.childImageSharp.fluid} />
          <Carousel.Caption>
            <b style={style}>site map structure</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={image.home.childImageSharp.fluid} />
          <Carousel.Caption>
            <b style={style}>homepage layout</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={image.cat.childImageSharp.fluid} />
          <Carousel.Caption>
            <b style={style}>course catalogue page</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={image.page.childImageSharp.fluid} />
          <Carousel.Caption>
            <b style={style}>course detail page</b>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export default Slide;
