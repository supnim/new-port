import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import Img from "gatsby-image";
import TitleP from "../components/TitleP";

import PrimeMusiclHero from "../../content/assets/heros/music_branding_hero.svg";

function DesignSystem() {
  const image = useStaticQuery(graphql`
    query {
      best: file(
        relativePath: { eq: "projects/music-branding/x/BestDayEver.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shove: file(
        relativePath: { eq: "projects/music-branding/x/ShoveIT.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smashing: file(
        relativePath: { eq: "projects/music-branding/x/SmashingIT.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      worst: file(
        relativePath: { eq: "projects/music-branding/x/WorstDayEver.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      acoustic: file(
        relativePath: { eq: "projects/music-branding/mood/acoustic.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chill: file(
        relativePath: { eq: "projects/music-branding/mood/chill.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      drivetime: file(
        relativePath: { eq: "projects/music-branding/mood/drivetime.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      happiness: file(
        relativePath: { eq: "projects/music-branding/mood/happiness.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dance: file(
        relativePath: { eq: "projects/music-branding/CuttingEDGE/DANCE.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      electronic: file(
        relativePath: {
          eq: "projects/music-branding/CuttingEDGE/ELECTRONIC.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      indie: file(
        relativePath: { eq: "projects/music-branding/CuttingEDGE/INDIE.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jazz: file(
        relativePath: { eq: "projects/music-branding/CuttingEDGE/JAZZ.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metal: file(
        relativePath: { eq: "projects/music-branding/CuttingEDGE/METAL.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pop: file(
        relativePath: { eq: "projects/music-branding/CuttingEDGE/POP.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rnb: file(
        relativePath: { eq: "projects/music-branding/CuttingEDGE/R&B.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rap: file(
        relativePath: { eq: "projects/music-branding/CuttingEDGE/RAP.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alt: file(relativePath: { eq: "projects/music-branding/best/alt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      best1: file(
        relativePath: { eq: "projects/music-branding/best/best.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      collab: file(
        relativePath: { eq: "projects/music-branding/best/collab.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      country: file(
        relativePath: { eq: "projects/music-branding/best/country.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dance1: file(
        relativePath: { eq: "projects/music-branding/best/dance.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      electronic1: file(
        relativePath: { eq: "projects/music-branding/best/electronic.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      most: file(
        relativePath: { eq: "projects/music-branding/best/most.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pop1: file(relativePath: { eq: "projects/music-branding/best/pop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      prime: file(
        relativePath: { eq: "projects/music-branding/best/prime.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rnb1: file(relativePath: { eq: "projects/music-branding/best/r&b.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rap1: file(relativePath: { eq: "projects/music-branding/best/rap.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rock: file(
        relativePath: { eq: "projects/music-branding/best/rock.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <Layout>
        <SEO
          title="Music Branding"
          keywords={[`prime`, `music`, `branding`, `cover`, `art`]}
        />
        <PrimeMusiclHero width="100%" height="auto" />
        <section
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem" }}
        >
          <section>
            <div style={{ textAlign: "center" }}>
              <TitleP
                title="Unlimited playlist"
                paragraph="a collection of specially curated playlists to reflect a variety of moods."
              />
            </div>
            <div className="row" style={{ display: "flex" }}>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.best.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.smashing.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.shove.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.worst.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.acoustic.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.chill.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.drivetime.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.happiness.childImageSharp.fluid} />
              </div>
            </div>
          </section>
          <section>
            <div style={{ textAlign: "center" }}>
              <TitleP
                title="Cutting Edge"
                paragraph="the brief was to recreate artwork aimed for a niche audience - the connoisseurs of the genre."
              />
            </div>
            <div className="row" style={{ display: "flex" }}>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.rap.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.indie.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.electronic.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.metal.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.rnb.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.pop.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.dance.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.jazz.childImageSharp.fluid} />
              </div>
            </div>
          </section>
          <section>
            <div style={{ textAlign: "center" }}>
              <TitleP
                title="best of 2017 so far"
                paragraph="the following playlist artworks represent the best of the year in their respected categories. i created the artist-focused, bold, distinctive style to help separate them from other playlists on the music service."
              />
            </div>
            <div className="row" style={{ display: "flex" }}>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.rock.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.most.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.electronic1.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.alt.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.country.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.rap1.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.best1.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.rnb1.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.pop1.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.collab.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.dance1.childImageSharp.fluid} />
              </div>
              <div style={{ padding: "1rem" }} className="col-3">
                <Img fluid={image.prime.childImageSharp.fluid} />
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </div>
  );
}

export default DesignSystem;
