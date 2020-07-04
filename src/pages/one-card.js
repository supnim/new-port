import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import Hero from "../components/hero";
import Card from "../components/card";
import CardLeft from "../components/cardLeft";
import CardRight from "../components/cardRight";
import TitleP from "../components/TitleP";
import VideoBox from "../components/videoBox";

import OneCardHeroImg from "../../content/assets/heros/one_card_hero.svg";

function BriefAlt() {
  return (
    <section className="row">
      <div
        className="col-12 wrapper"
        style={{
          color: "white",
          backgroundColor: "#bf2828",
          border: "none"
        }}
      >
        <h4>Insight</h4>
        <p>
          Students / young adults are the best to target for banks, as its
          unlikely for them to change banks once signed up; pretty much a
          lifetime customer.{" "}
        </p>
        <ol className="list">
          <li>wanted to save but didn't know how</li>
          <li>need a more user-friendly peer-to-peer payment system</li>
          <li>discount and offers on thing they would actually wanted</li>
        </ol>
        <p className="superset">
          in addition we wanted to think ahead and predict/innovate in the
          banking sector.
        </p>
      </div>
    </section>
  );
}

function OneCard() {
  const image = useStaticQuery(graphql`
    query {
      id: file(relativePath: { eq: "projects/one-card/identity.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      statement: file(relativePath: { eq: "projects/one-card/statement.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      goals: file(relativePath: { eq: "projects/one-card/goals.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      offers: file(relativePath: { eq: "projects/one-card/offers.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      location: file(relativePath: { eq: "projects/one-card/location.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discount: file(relativePath: { eq: "projects/one-card/discount.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      claims: file(relativePath: { eq: "projects/one-card/claims.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      profile: file(relativePath: { eq: "projects/one-card/profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pay: file(relativePath: { eq: "projects/one-card/pay.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      complete: file(relativePath: { eq: "projects/one-card/complete.png" }) {
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
          title="One Card"
          keywords={[`product`, `designer`, `london`, `nimesh`]}
        />
        <OneCardHeroImg width="100%" height="auto" />
        <Hero
          heroImg="profilePic" //need it or breaks it
          heroTitle="Brief"
          heroParagraphy="Re-imagine banking for a demographic group. We chose ourselves; students. we set out with the aim to create a tailored banking experience for students; looking at what is expected and desired from a bank. considering the future of banking and how we can provide something that is ahead of its time. with all that in mind we made the virgin one card; the one and only card you'd need that houses the following cards: credit/debit, store loyalty, gym and work building (nfc), id and many more."
        />
        {BriefAlt()}
        <section
          className="row full"
          style={{ maxWidth: "1400px", margin: "0 auto" }}
        >
          <div
            className="col-12"
            style={{
              alignItems: "center",
              textAlign: "center",
              padding: "0 4rem",
              width: "70%"
            }}
          >
            <h4>a short video demo</h4>
            <VideoBox
              url="https://player.vimeo.com/video/168798295"
              description=""
            />
          </div>
          <div style={{ margin: "2rem 4rem" }}>
            <CardLeft
              key="1"
              image={image.id.childImageSharp.fluid}
              title="all purpose one card"
              description="the idea was to eradicate the wallet. we are moving into an era of contact-less payment and to innovate further and aid in this this was our answer: a multi-purpose card."
            />
            <CardRight
              key="2"
              image={image.statement.childImageSharp.fluid}
              title="home / statement"
              byline="front and centre of the app is where all the most important pieces of information are; the amount in your current account, daily spend and daily budget. the ring is visual representation of the remainder funds of your set budget for that day, also shown in percentage and actual £'s so you can see everything you need at a glance."
              description=" the statement follows showing time, date, business name, sector and amount. the bar beneath it depicts the progress of set monthly spend/ comparison to last month. while researching we came to find people want as much information as possible when it comes to finance – it allows for better decision making. with that in mind we went about creating a time-line to match the money trail, e.g. showing journeys taken on the bus & metro this is so customers can easily see where and what their money is being used for."
            />
            <CardLeft
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
            />
          </div>
        </section>
        <section className="divide-3">
          <Card
            key="5"
            image={image.location.childImageSharp.fluid}
            title="locate"
            description="a map view presenting all the near by deals and offers around your city."
          />
          <Card
            key="6"
            image={image.discount.childImageSharp.fluid}
            title="reward"
            description="progress towards their rewards, which is calculated by how many times you visit and how much you spend in store."
          />
          <Card
            key="7"
            image={image.claims.childImageSharp.fluid}
            title="claims"
            description="the process of claiming an offer shown with distance to the nearest cinema (in this case) and how many dates till the offer expires."
          />
        </section>
        <section className="row full">
          <div
            className="col-8"
            style={{
              alignItems: "center",
              textAlign: "center",
              padding: "0 4rem",
              width: "70%",
              margin: "0 auto"
            }}
          >
            <TitleP
              title="cards / transfer"
              paragraph="through experience and research, we discovered how cumbersome it is to pay back someone. you need their sort code & account number which isn’t an easy or user friendly way to transfer money; making it more of a chore than it already is. with the rise of contact-less technology which allows users to pay via mobile phone, we thought it would make sense to incorporate that into the app so you can pay each other by simply tapping phones together."
            />
          </div>
          <div className="divide-3">
            <Card
              key="5"
              image={image.profile.childImageSharp.fluid}
              title="profile"
              description="located here are all the cards you have synced, along with some essential information such as sort code and account number"
            />
            <Card
              key="6"
              image={image.pay.childImageSharp.fluid}
              title="pay"
              description="inputting the amount you want to send, you either select from the contacts or bump you phone against the person you want to transfer the money to."
            />
            <Card
              key="7"
              image={image.complete.childImageSharp.fluid}
              title="comfirmation"
              description="once the action is complete, the user is shown the details of the transaction which includes; amount, time, whom it was to and the method of payment."
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default OneCard;
