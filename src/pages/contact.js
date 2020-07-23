import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import LogoBox from "../components//logobox";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const Contact = () => {
  const image = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profilePic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
      amazon: file(relativePath: { eq: "thumbnails/logos/amazon.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      swisscom: file(relativePath: { eq: "thumbnails/logos/swisscom.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tes: file(relativePath: { eq: "thumbnails/logos/tes.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      virgin: file(relativePath: { eq: "thumbnails/logos/virgin.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const siteTitle = image.site.siteMetadata.title;

  return (
    <div
      style={{ color: "white", backgroundColor: " black" }}
      className="contactBox"
    >
      <Layout title={siteTitle}>
        <SEO
          title="contact"
          keywords={[`product`, `designer`, `london`, `nimesh`]}
        />

        <article className="page-template">
          <div className="post-content-body row contact">
            <div className="contactImg col-6">
              <Img
                className="aboutMePic"
                fluid={image.profilePic.childImageSharp.fluid}
              />
            </div>
            <div className="aboutMe col-6">
              <h3 className="aboutMeTitle">hi, i am nimesh</h3>
              <p>
                a creative based in London practising product design (UI/UX).
                Its the process of taking an idea from concept to completion I
                enjoy most. The enthusiasm for my craft stems not just from
                within, but those around me, as I thrive in a diverse, social
                situation as they provide invaluable experiences allowing me to
                expand my understanding of different disciplines and build out
                my skill set. I am continually striving to better myself, a
                drive that is reflected in my work
              </p>
              <p>
                In my downtime, I play with different mediums, some including;
                music, still and motion pictures, and designing and development
                of websites.
              </p>
              <p>
                Born in Kuwait and brought up in Kerala, India, studied
                Interactive Media Designer (IMD) at Northumbria University in
                Newcastle. Now practising at{" "}
                <a href="https://www.tes.com">Tes</a> in London.
              </p>
              <span className="contactSpan">––––––––––––––––––––––</span>
              <p>
                Hope you have enjoyed looking through my work. If you'd like to
                discuss new projects or opportunities; get in touch or find me
                on{" "}
                <a href="https://www.linkedin.com/in/nimeshreghunandanan/">
                  linkedin.
                </a>{" "}
              </p>
            </div>
          </div>
        </article>
        <article
          style={{
            alignItems: "center",
            textAlign: "center",
            padding: "0 4rem"
          }}
        >
          <h6>worked with</h6>
          <LogoBox
            one={image.amazon.childImageSharp.fixed}
            oneAlt="Amazon"
            two={image.swisscom.childImageSharp.fixed}
            twoAlt="Swisscom"
            three={image.tes.childImageSharp.fixed}
            threeAlt="Tes Global"
            four={image.virgin.childImageSharp.fixed}
            fourAlt="Virgin Money"
            five=" "
            fiveAlt=" "
          />
        </article>
      </Layout>
    </div>
  );
};

export default Contact;
