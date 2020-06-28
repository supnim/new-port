import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Pdf from "../../content/assets/nimeshCV.pdf";
import LogoBox from "../components//logobox";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const AboutPage = () => {
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
              <h3 className="aboutMeTitle">
                hi, i am nimesh a conceptual creative based in london
              </h3>
              <p>
                practising in the field of digital products (UI/UX). I enjoy the
                process of taking an idea from concept to completion through a
                variety of different methods and journeys. i am constantly
                striving to better myself, a drive that is reflected in my work.
                my enjoyment for my craft stems not just from within, but from
                others too, as i thrive in diverse, social situations. these
                invaluable experience allow me to expand my understanding of
                different disciplines and build my skill set.
              </p>
              <p>
                In my downtime, i play with different mediums including; music,
                still and motion pictures, and designing and developing
                websites.
              </p>
              <p>
                Born in Kuwait and brought up in Kerala, India, grew into an
                interactive media designer (IMD) at Northumbria University in
                Newcastle. now practising at{" "}
                <a href="https://www.tes.com">Tes</a> in London.
              </p>
              <span className="contactSpan">––––––––––––––––––––––</span>
              <p>
                hope you have enjoyed looking through my work. if you'd like to
                dicuss new projects or opportunities; get in touch or find me on{" "}
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
            five={0}
          />
        </article>
        <section className="contactButtons contact">
          <ul className="actions fit">
            <li>
              <a
                href={Pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="cv button large primary"
              >
                CV
              </a>
            </li>
            <li>
              <a href="mailto:hello@supnim.com" className="button large">
                Get in touch
              </a>
            </li>
          </ul>
        </section>
      </Layout>
    </div>
  );
};

export default AboutPage;
