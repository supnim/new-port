import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import CardLeft from "../components/cardLeft";
import CardRight from "../components/cardRight";
import Img from "gatsby-image";

import DesignSystemImg from "../../content/assets/heros/design_system_hero.svg";

function OneCard() {
  const image = useStaticQuery(graphql`
    query {
      button: file(relativePath: { eq: "projects/design-system/button.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      colour: file(relativePath: { eq: "projects/design-system/colour.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      element: file(
        relativePath: { eq: "projects/design-system/element.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fields: file(relativePath: { eq: "projects/design-system/fields.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fieldsstates: file(
        relativePath: { eq: "projects/design-system/fieldsstates.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      icon: file(relativePath: { eq: "projects/design-system/icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      typography: file(
        relativePath: { eq: "projects/design-system/typography.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  function BriefAlt() {
    return (
      <section className="row">
        <div
          className="wrapper"
          style={{
            margin: "4rem auto",
            color: "black",
            backgroundColor: "white",
            border: "2px black solid"
          }}
        >
          <h4>Aim</h4>
          <p>
            One single source of truth; forming unity across the whole site and
            lay a stable foundation for onboarding future businesses. <br />
            The live design system can be found{" "}
            <a href="https://www.tes.com/styleguide/">
              <b>here</b>
            </a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <div>
      <Layout>
        <SEO
          title="Design System"
          keywords={[`product`, `designer`, `london`, `nimesh`]}
        />
        <DesignSystemImg width="100%" height="auto" />
        {BriefAlt()}
        <section className="row full">
          <div className="col-12">
            <CardLeft
              key="1"
              image={image.typography.childImageSharp.fluid}
              title="core"
              description="this is the first and most important part of the design system; everything is built of this. its mainly comprised of typography, colour and icons"
            />
            <div className="row">
              <div className="col-6">
                <Img fluid={image.colour.childImageSharp.fluid} />
              </div>
              <div className="col-6">
                <Img fluid={image.icon.childImageSharp.fluid} />
              </div>
            </div>
            <CardRight
              key="2"
              image={image.element.childImageSharp.fluid}
              title="elements"
              description="we're building on what we've built. combining multiple core parts to make more complex pieces"
            />
            <div className="row">
              <div className="col-6">
                <Img fluid={image.fields.childImageSharp.fluid} />
              </div>
              <div className="col-6">
                <Img fluid={image.fieldsstates.childImageSharp.fluid} />
              </div>
            </div>
            {/* <CardLeft
              key="3"
              image={image.goals.childImageSharp.fluid}
              title="expenditure / goals "
              byline="the pie chart shows the amount in all the categories the customers are spending money in. beneath that is all the set goals with the progress."
              description="pie chart: once the user can easily see and understand where they are spending money, it is then they can take action accordingly. 
              
              goals: the % of money you save on discounts will be put in here along withchange from buying things. for example: say you buy a coffee for £2.20, the amount left of the pound will be put into your savings – in this case 80pwill be deposited."
            />
            <CardRight
              key="4"
              image={image.offers.childImageSharp.fluid}
              title="offers"
              byline="local, recommended and popular."
              description="using location information, relevant offers and deals are shown to the user also taking into consideration previous spending habits. with this data we populate the 'your reward' section, for example: if you are a regular shopper at topman - you'd be given a personal discount on your next purchase. the app is not only helping you monitor your spending but also help you spend more wisely."
            /> */}
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default OneCard;
