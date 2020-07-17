import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import LogoBox from "../components/logobox";
import CardLeft from "../components/cardLeft";
import CardRight from "../components/cardRight";
import VideoBox from "../components/videoBox";
import Image from "gatsby-image";

import KnowhereHeroImg from "../../content/assets/heros/knowhere_hero.svg";

function BriefAlt() {
  return (
    <section className="row">
      <div className="col-6" style={{ textAlign: "right", padding: "4rem" }}>
        <h3>environment</h3>
        <p style={{ color: "grey" }}>
          A collaborative project that took place in the{" "}
          <a href="https://www.fhnw.ch/en/">FHNW</a> - a university in
          Switzerland. Bringing together students from{" "}
          <a href="https://www.merz-akademie.de/en/">Merz Akademie</a>; in
          Stuttgart, Germany,{" "}
          <a href="https://www.northumbria.ac.uk">Northumbria University</a>;
          Newcastle, UK and{" "}
          <a href="https://www.seu.edu.cn/english/">Southeast University</a>;
          china. Working with a mixed team of students studying: computer
          science, graphic design, psychology and interactive media design to
          create something for Lora; a new low powered network, a part of the
          internet of things (IoT)
        </p>
      </div>
      <div className="col-6" style={{ textAlign: "left", padding: "4rem" }}>
        <h3>product</h3>
        <p style={{ color: "grey" }}>
          We created <b>Knowhere</b>; it's a tracking device using the Lora
          network. allowing users to track their personal belongings by
          attaching the small device and seeing the location through the
          accompanying application. The final deliverable was a presentation of
          the idea to members of{" "}
          <a href="https://www.swisscom.ch/en/">Swisscom</a> (the company
          hosting the project), showing the workings of the device; technology
          and use case, along with research, app & product designs, business
          plans, device cost, a working demo and a video demonstrating of key
          features.
        </p>
      </div>
    </section>
  );
}

function Knowhere() {
  const image = useStaticQuery(graphql`
    query {
      connect: file(relativePath: { eq: "projects/knowhere/connect.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      zone: file(relativePath: { eq: "projects/knowhere/zone.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locating: file(relativePath: { eq: "projects/knowhere/locating.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apple_watch: file(
        relativePath: { eq: "projects/knowhere/apple_watch.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      multiface: file(relativePath: { eq: "projects/knowhere/multiface.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fhnw: file(relativePath: { eq: "projects/knowhere/FHNW.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      merz: file(relativePath: { eq: "projects/knowhere/merz.png" }) {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      southeast: file(
        relativePath: { eq: "projects/knowhere/southeast-uni.png" }
      ) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      swisscom: file(relativePath: { eq: "projects/knowhere/swisscom.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      northumbria: file(
        relativePath: { eq: "projects/knowhere/northumbria.png" }
      ) {
        childImageSharp {
          fixed(width: 148) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div>
      <Layout>
        <SEO
          title="Knowhere"
          keywords={[`internet of things`, `swisscom`, `iPole`, `Collabrative`]}
        />
        <KnowhereHeroImg width="100%" height="auto" />
        {BriefAlt()}
        <LogoBox
          one={image.fhnw.childImageSharp.fixed}
          oneAlt="University of Applied Sciences and Arts Northwestern Switerland"
          two={image.swisscom.childImageSharp.fixed}
          twoAlt="Swisscom"
          three={image.northumbria.childImageSharp.fixed}
          threeAlt="Northumbria University"
          four={image.southeast.childImageSharp.fixed}
          fourAlt="Southeast University"
          five={image.merz.childImageSharp.fixed}
          fiveAlt="Merz Akademie University of Applied Art, Design and Media"
        />
        <section>
          <div className="knowhere-container">
            <CardLeft
              key="1"
              image={image.connect.childImageSharp.fluid}
              title="Connecting"
              description="To add a tracker, you simply enter or scan the code on the back of the device to sync it, then give it a name along with an icon and a colour for easy recognition on the map."
            />
            <CardRight
              key="2"
              image={image.zone.childImageSharp.fluid}
              title="Safe zone"
              byline=""
              description="Adding a geo-fence allows the user to set up safe zones, so, if you left the house without your wallet, you’d get a notification letting you know before it was too late."
            />
            <CardLeft
              key="3"
              image={image.locating.childImageSharp.fluid}
              title="Locating"
              byline=""
              description="Selecting the lost item will display a map showing its location, then you have the ability to ‘ring’ by playing an audio alert or ‘flash’ which then turns on an led beacon so disruption isn't caused to the same degree of sound."
            />
            <CardRight
              key="4"
              image={image.apple_watch.childImageSharp.fluid}
              title="Viewports & platforms"
              byline=""
              description="In production we considered all possible platforms and devices, looking at android, ios and windows and to different view ports such as the apple watch and other wearables."
            />
          </div>
        </section>
        <section className="row full">
          <div
            className="col-12"
            style={{
              margin: "0 auto"
            }}
          >
            <Image fluid={image.multiface.childImageSharp.fluid} />
          </div>
        </section>
        <section className="row full">
          <div
            className="col-12"
            style={{
              alignItems: "center",
              textAlign: "center",
              padding: "0 4rem",
              width: "70%"
            }}
          >
            <h4>video demo</h4>
            <VideoBox
              url="https://player.vimeo.com/video/168933267?title=0&byline=0&portrait=0"
              description="iPole | collaborative project with universities from Switzerland, Germany and China."
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Knowhere;

//image box
