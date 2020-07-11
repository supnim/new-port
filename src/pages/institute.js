import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import CardLeft from "../components/cardLeft";
import CardRight from "../components/cardRight";
import TitleP from "../components/TitleP";
import Brief from "../components/brief";
import Carousel from "../components/carousel";
import Wireframe from "../components/wireframe"; // prefilled carousel

import InstituteImg from "../../content/assets/heros/institute_hero.svg";
import course from "../components/gifs/institute/course.gif";
import pages from "../components/gifs/institute/pages.gif";
import process from "../components/gifs/institute/process.gif";

function Institute() {
  const image = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "projects/institute/route-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "projects/institute/route-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "projects/institute/route-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      four: file(relativePath: { eq: "projects/institute/route-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      five: file(relativePath: { eq: "projects/institute/route-5.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mix: file(relativePath: { eq: "projects/institute/mix.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const briefStyle = {
    margin: "4rem auto",
    color: "black",
    backgroundColor: "white",
    border: "2px black solid",
    padding: "4rem"
  };

  return (
    <div>
      <Layout>
        <SEO
          title="Institute"
          keywords={[`product`, `designer`, `london`, `nimesh`]}
        />
        <InstituteImg width="100%" height="auto" />
        <Brief
          style={briefStyle}
          title="Brief"
          paragraph={
            <p>
              give institute a facelift/rebranding. tes institute is a leading
              provider of online courses and programmes with a particular focus
              on teacher training and development this is what it looked like
              before:{" "}
              <a href="https://web.archive.org/web/20200513133158/https://www.tes.com/institute/">
                <b>this</b>
              </a>
            </p>
          }
        />
        <section
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 0" }}
        >
          <div style={{ textAlign: "center" }}>
            <TitleP
              title="wireframing"
              paragraph="this is the starting stucture"
            />
          </div>

          <div style={{ width: "70%", margin: "0 auto", padding: "4rem 0" }}>
            <Wireframe />
          </div>
        </section>
        <section className="row full">
          <div className="col-12">
            <CardLeft
              key="1"
              image={image.mix.childImageSharp.fluid}
              title="Art direction"
              description="first, i explored a styling, something that is in the theme of the current but still different to bring some life"
            />
            <br />
            <div>
              <Carousel
                style={{ color: "black" }}
                one={image.one.childImageSharp.fluid}
                oneAlt="One"
                two={image.two.childImageSharp.fluid}
                twoAlt="Two"
                three={image.three.childImageSharp.fluid}
                threeAlt="Three"
                four={image.four.childImageSharp.fluid}
                fourAlt="Four"
                five={image.five.childImageSharp.fluid}
                fiveAlt="Five"
              />
            </div>
            <br />
            <CardRight
              key="2"
              image={image.one.childImageSharp.fluid}
              title="choosen direction"
              description="even though the other routes were great in their own right, this one took what was already established and elevated it"
            />
            <br />
            <div className="row">
              <div className="col-6" style={{ backgroundColor: "#F5F5F5" }}>
                <img src={course} alt="course gif" />
              </div>
              <div
                className="col-6"
                style={{ margin: "auto", padding: "5rem" }}
              >
                <TitleP
                  title="Component"
                  paragraph="then i componentized the rebuild to make it more efficient and move away from making things one time, plus this allows us to build pages fast"
                />
              </div>
            </div>
            <div className="row" style={{ backgroundColor: "#F5F5F5" }}>
              <div className="col-6">
                <img src={process} alt="process gif" />
              </div>
              <div className="col-6">
                <img src={pages} alt="pages gif" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Institute;
