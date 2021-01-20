import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import TitleP from "../components/TitleP";
import Carousel from "../components/carousel";

import RedesignHero from "../../content/assets/heros/redesign_hero.svg";
import Timeline from "../../content/assets/projects/redesign/timeline.svg";
import CardIcon from "../components/cardIcon";
import One from "../../content/assets/projects/design-system/one.svg";
import Two from "../../content/assets/projects/design-system/two.svg";
import Three from "../../content/assets/projects/design-system/three.svg";
import Content from "../../content/assets/projects/redesign/content.svg";

import Double from "../../content/assets/projects/redesign/double.svg";
import Overal from "../../content/assets/projects/redesign/overal.svg";
import Twenty from "../../content/assets/projects/redesign/twenty.svg";

function Redesign() {
  const image = useStaticQuery(graphql`
    query {
      alison: file(relativePath: { eq: "projects/redesign/alison.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dave: file(relativePath: { eq: "projects/redesign/dave.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      faye: file(relativePath: { eq: "projects/redesign/faye.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fiona: file(relativePath: { eq: "projects/redesign/fiona.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      joshua: file(relativePath: { eq: "projects/redesign/joshua.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      phoebe: file(relativePath: { eq: "projects/redesign/phoebe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      journey: file(relativePath: { eq: "projects/redesign/journey.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wireframe: file(
        relativePath: { eq: "projects/redesign/wireframe.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      structure: file(relativePath: { eq: "projects/redesign/structure.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mood: file(relativePath: { eq: "projects/redesign/mood.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      live: file(relativePath: { eq: "projects/redesign/live.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      audience: file(relativePath: { eq: "projects/redesign/audience.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      redesign_journey: file(
        relativePath: { eq: "projects/redesign/redesign_journey.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      redesign_structure: file(
        relativePath: { eq: "projects/redesign/redesign_structure.jpg" }
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
          title="Redesign"
          keywords={[
            `tes.com`,
            `redesign`,
            `homepage`,
            `rebuild`,
            `SaaS`,
            `sotfware`
          ]}
        />
        <RedesignHero width="100%" height="auto" />
        <div className="col-8" style={{ margin: "0 auto", padding: "2rem" }}>
          <TitleP
            title="Brief"
            paragraph={
              <p>
                Redesign the homepage to better illustrate the new company goals
                — the full conversion to SaaS business, a higher focus on B2B,
                and further internationalisation of the business. <br />
                <br />
                previously looked like{" "}
                <a href="https://web.archive.org/web/20200613221639/https://www.tes.com/">
                  <b>this</b>
                </a>
              </p>
            }
          />
        </div>{" "}
        <div style={{ textAlign: "center" }}>
          <h3>Structure</h3>
          <p style={{ padding: "2rem" }}>
            We worked in a crossfunctional team, I connecting all limbs of the
            business.
          </p>
          <Img fluid={image.redesign_structure.childImageSharp.fluid} />
        </div>
        <div style={{ textAlign: "center", padding: "4rem" }}>
          <h3>Timeline</h3>
          <Timeline width="100%" height="auto" />
        </div>
        <section style={{ backgroundColor: "#F5F5F5", padding: "2rem" }}>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "4rem 0",
              textAlign: "center"
            }}
          >
            <h3 style={{ padding: "2rem" }}>Research</h3>
            <p>
              I started by hypothesising, what our users are looking for and the
              problems that may face. Then I set out to interview a variety of
              school leaders and teachers, primary and secondary, east to west
              making sure to cover any edge cases, therefore, allow me to have a
              solid base to go off.
              <br /> <br /> <br />
              <b style={{ fontSize: "24px", margin: "2rem" }}>My hypothesis:</b>
              <ol>
                <br />
                1. International schools do not know who we are (brand) <br />
                or the products and services we offer (value)
                <br />
                2. We are a recruiting company
                <br />
                3. We come across as a UK centric business
                <br />
                4. We are too expensive for the independent schools
              </ol>
            </p>
          </div>
          <section style={{ width: "80%", display: "flex", margin: "0 auto" }}>
            <div style={{ width: "50%", textAlign: "center" }}>
              <b
                style={{
                  padding: "2rem",
                  fontSize: "24px",
                  color: "#4C4C4C"
                }}
              >
                Qualitative
              </b>
              <br /> <br />
              <p style={{ fontSize: "14px", padding: "0 4rem" }}>
                I <b>interviewed</b> a total of 7 people, whereby I created a
                loose script/questionnaire as a base to pry open these users
                and, to gain a better understanding of what they loved, hated
                and expected from tes.com.
                <br /> <br />+ <b>Competitive research </b>
                <br />
                <br />+ ongoing <b>Stakeholder meetings</b> as the business was
                defining the strategy/offerings in parallel so the designs had
                to reflect those.
              </p>
            </div>
            <div style={{ width: "50%", textAlign: "center" }}>
              <b
                style={{
                  padding: "2rem",
                  fontSize: "24px",
                  color: "#4C4C4C"
                }}
              >
                Quantitative
              </b>
              <br /> <br />
              <p style={{ fontSize: "14px", padding: "0 4rem" }}>
                Worked very closely with the heads of the sales teams, who had a
                combine experience/user knowledge of <b>25+ years</b>.<br />
                <br /> This was a wonderful insight, as they had “interviewed”{" "}
                <b>100’s of thousands of customers</b> and has a clear
                understanding of there pain points and expectations.
              </p>
            </div>
          </section>{" "}
          <hr
            style={{
              backgroundColor: "darkgrey",
              margin: "8rem auto ",
              width: "400px"
            }}
          />
          <div
            style={{
              textAlign: "center",
              margin: "2rem auto",
              maxWidth: "600px"
            }}
          >
            <TitleP
              title="Findings"
              paragraph="There was some crossover in my hypnosis and finding, which was great to know. But also some new areas of concern were discovered — jotted down below."
            />
          </div>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "4rem 0",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              alignItems: "baseline"
            }}
          >
            <CardIcon
              icon={<One />}
              description="Unclear on what exactly we do/provide for teacher and schools"
            />
            <CardIcon
              icon={<Two />}
              description="We come across as a UK first/only business"
            />
            <CardIcon
              icon={<Three />}
              description="no proof of how we have/could help"
            />
          </div>
          <div
            style={{
              background: "white",
              margin: "0 auto",
              width: "80%",
              textAlign: "center",
              paddingTop: "4rem"
            }}
          >
            <b style={{ fontSize: "24px" }}>Note worthy findings</b>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                margin: "0 auto",
                padding: "2rem"
              }}
            >
              <ul
                style={{
                  width: "50%",
                  margin: "0 auto",
                  textAlign: "center",
                  fontSize: "14px"
                }}
              >
                <li style={{ padding: "1rem 0" }}>
                  Easy navigation into other areas of the site
                </li>
                <li style={{ padding: "1rem 0" }}>
                  Login box unnessessary <br />
                  (feels like a must/gated )
                </li>

                <li style={{ padding: "1rem 0" }}>
                  Homepage: recommend pop up = <br /> annoying, 1-10 scale too
                  big 5 would be <br />
                  enough + usually ignored
                </li>
              </ul>
              <ul
                style={{ width: "50%", textAlign: "center", fontSize: "14px" }}
              >
                <li style={{ padding: "1rem 0" }}>
                  Categorise steams / teacher <br />
                  schools and aspirating teachers
                </li>
                <li style={{ padding: "1rem 0" }}>
                  Expects latest education news / <br /> current affairs and
                  range of articles
                </li>
                <li style={{ padding: "1rem 0" }}>
                  Imagery lacks diversity / seems stocky - <br /> illustrations
                  suggested
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              margin: "0 auto",
              width: "80%",
              textAlign: "center",
              padding: "4rem",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <p style={{ padding: "2rem", textDecoration: "underline" }}>
              <a href="https://www.dropbox.com/s/sd3d5mguvovjdka/questions.png?dl=0">
                interview questions
              </a>
            </p>
            <p style={{ padding: "2rem", textDecoration: "underline" }}>
              <a href="https://www.dropbox.com/s/fajw3bip7meguxp/cliffnotes.jpg?dl=0">
                interview cliffnotes
              </a>
            </p>
          </div>
        </section>
        <section>
          <div
            style={{
              width: "80%",
              margin: "4rem auto",
              textAlign: "center"
            }}
          >
            <TitleP
              title="Personas"
              paragraph="From the research conducted; these where some of the personas formed. As these were created based on real people I interviewed, it was much easier to put myself in their shoes. Of course, the personas embodied 100's of thousands of leaders and staff added from the Sales teams on the job experience, but something about having a true source of reference is interesting."
            />
            <Carousel
              one={image.alison.childImageSharp.fluid}
              two={image.dave.childImageSharp.fluid}
              three={image.faye.childImageSharp.fluid}
              four={image.fiona.childImageSharp.fluid}
              five={image.joshua.childImageSharp.fluid}
            />
          </div>
        </section>
        <section>
          <div
            style={{
              margin: "8rem auto",
              textAlign: "center"
            }}
          >
            <div style={{ margin: "0 auto", width: "80%" }}>
              <TitleP
                title="UX"
                paragraph="Plotting the journey and structure. At this stage, there were many iterations and card sorting exercises to define the best user journey that balances the business goals and customer needs. It was important to NOT alienate our core customer base with B2B offerings."
              />
            </div>
            <Img fluid={image.journey.childImageSharp.fluid} />
            <Img fluid={image.wireframe.childImageSharp.fluid} />
            <Img fluid={image.audience.childImageSharp.fluid} />
            <Img fluid={image.redesign_journey.childImageSharp.fluid} />
            <div
              style={{ width: "800px", margin: "4rem auto", textAlign: "left" }}
            >
              <TitleP title="Pre-UI" />
              <p>
                At this stage, I was trying out many a different layouts.
                Restained by the CMS functionality and inturn time. In a
                previous project, we created a CMS and in each project I use it,
                I try to improve it in whatever ways I can. SO for all projects
                at the design stage, there are three versions: <br />
                <br /> 1. easy = can build out the box <br /> 2. ideal = some
                enhancements need to be done to realise the design <br /> 3.
                aspiration = building new features, making big changes creating
                for the future.
                <br /> <br /> With these designs, the Engineers and I battle it
                out. <br />
                <br />
                This battle I left with:
                <br /> Sticky hero / CTA (UX) <br /> Implementation of SVGs
                (performance improvement) <br /> Icons in card (UI)
                <br /> Full-width pages (previously had a left nav)
                <br /> And some other minor improvements.
              </p>
              <Img fluid={image.structure.childImageSharp.fluid} />
            </div>
          </div>
        </section>
        <section>
          <p
            style={{
              textAlign: "center",
              margin: "0 auto",
              width: "60%",
              padding: "2rem",
              fontSize: "18px"
            }}
          >
            I worked closely with marketing to get the look and feel right, and
            copywriters to get the tone of voice down — so the final prototype
            put in front of the board was as close to the end result as
            possible.
          </p>
          <Content width="100%" height="auto" />

          <div
            style={{
              maxWidth: "1000px",
              margin: "4rem auto",
              textAlign: "center"
            }}
          >
            <TitleP
              title="UI"
              paragraph={
                <p>
                  Adding art direction and life to the skeleton.
                  <br />
                  This was relatively straightforward as this project was built
                  on the{" "}
                  <Link to="/pagebuilder">
                    <b>CMS</b>
                  </Link>
                  , which was built using the
                  <Link to="/design-system">
                    {" "}
                    <b>design system</b>
                  </Link>
                  . So most of the UI was sorted and we only need to focus on
                  the art direction and implementing slight changes to the CMS
                  to facilitate the designs
                </p>
              }
            />
            <Img fluid={image.mood.childImageSharp.fluid} />
          </div>
        </section>
        <section>
          <div
            className="col-8"
            style={{
              margin: "6rem auto",
              textAlign: "center"
            }}
          >
            <TitleP
              title="Launch"
              paragraph={
                <p>
                  Through this redesign, we addressed all issues and
                  better-aligned ourselves for future moves. With a clear
                  explanation of <b>who we are</b>, <b>what we do</b> and{" "}
                  <b>how we can help you</b>. see live site{" "}
                  <b>
                    <a href="https://www.tes.com">here</a>
                  </b>
                </p>
              }
            />
          </div>
          <Img fluid={image.live.childImageSharp.fluid} />
        </section>
        <section style={{ backgroundColor: "#F5F5F5", padding: "2rem" }}>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center"
            }}
          >
            <h3 style={{ padding: "2rem" }}>Result</h3>
            <p>
              The project was recieved really well internally and externally.
              Regrouped with the original user testers and sales team to close
              the loop and double check we’re address all the problem they had
              pointed out. They believed we had. As of writting the impact of
              this project...
            </p>
          </div>

          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "4rem 0",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              alignItems: "baseline"
            }}
          >
            <CardIcon icon={<Double />} description="lead generation" />
            <CardIcon
              icon={<Twenty />}
              description="increase in new registration"
            />
            <CardIcon
              icon={<Overal />}
              description="increased click through, reduced bounce rate"
            />
          </div>
        </section>
        <div
          style={{
            textAlign: "center",
            width: "80%",
            margin: "0 auto",
            padding: "4rem"
          }}
        >
          <b style={{ fontSize: "32px" }}>Postscript</b>
          <p style={{ padding: "4rem", width: "800px", margin: "0 auto" }}>
            We have revisited this project to refine copy, modify illustrations
            and A/B test different structure, with each iteration moving the
            needle in the right direction. If I was to do this again:
            <br />
            <br />
            <li
              style={{
                fontSize: "14px",
                padding: "1rem",
                margin: "0 8rem"
              }}
            >
              I'd have the business strategy/offering finalised so I could use
              to influence my layout and inturn the user.
            </li>
            <li
              style={{
                fontSize: "14px",
                padding: "1rem",
                margin: "0 8rem"
              }}
            >
              I'd want to work closely with marketing; in this project, I
              defined the art direction and they adapted it. Moving forward it
              should be more of a collaborative effort throughout.
            </li>
            <li
              style={{
                fontSize: "14px",
                padding: "1rem",
                margin: "0 8rem"
              }}
            >
              Ways of working: At that stage, we were using excel and sketch
              which; created some friction regarding transparency and things
              being out of date. We've moved to Figma and I want to start using
              Notion.
            </li>
          </p>
        </div>
      </Layout>
    </div>
  );
}

export default Redesign;
