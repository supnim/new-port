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
          a collaborative project that took place in the fhnw - a university in
          switzerland. bringing together students from merz akademie; in
          stuttgart, germany, northumbria university; newcastle, uk and
          southeast university; china. working with a mixed team of students
          studying: computer science, graphic design, psychology and interactive
          media design to create something for lora; a new low powered network,
          a part of the internet of things (iot)
        </p>
      </div>
      <div className="col-6" style={{ textAlign: "left", padding: "4rem" }}>
        <h3>product</h3>
        <p style={{ color: "grey" }}>
          we created <b>'knowhere'</b>; it's a tracking device using the lora
          network. allowing users to track their personal belongings by
          attaching the small device and seeing the location through the
          accompanying application. the final deliverable was a presentation of
          the idea to members of swisscom (the company hosting the project),
          showing the workings of the device; technology and user wise. along
          with research, app & product designs, business plans, device cost, a
          working demo and a video demonstrating key features.
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
          fixed(width: 140) {
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
              title="connecting"
              description="to add a tracker, you simply enter or scan the code on the back of the tracker to sync it then give it a name along with an icon and a colour for easy recognition on the map."
            />
            <CardRight
              key="2"
              image={image.zone.childImageSharp.fluid}
              title="Safe zone"
              byline=""
              description="adding a geo-fence allows the user to set up safe zones, for example, if you left the house without your wallet, you’d get a notification letting you know before its too late."
            />
            <CardLeft
              key="3"
              image={image.locating.childImageSharp.fluid}
              title="Locating"
              byline=""
              description="selecting the lost item will display a map showing the location of the device, then you have the ability to ‘ring’ by playing an audio alert or ‘flash’ which then turns on an led beacon so disruption isn't caused."
            />
            <CardRight
              key="4"
              image={image.apple_watch.childImageSharp.fluid}
              title="Viewports & platforms"
              byline=""
              description="in production we considered all possible platforms and devices, looking at android, ios and windows to different view ports such as the apple watch."
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
              description="ipole | collaborative project with universes from switzerland, germany and china."
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Knowhere;

//image box
