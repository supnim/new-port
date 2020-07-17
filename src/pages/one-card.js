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
import Brief from "../components/brief";

import OneCardHeroImg from "../../content/assets/heros/one_card_hero.svg";

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

  const briefStyle = {
    color: "white",
    backgroundColor: "#bf2828",
    border: "none"
  };
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
          heroParagraphy="Re-imagine banking for a demographic group. We chose ourselves; students. We set out with the aim to create a tailored banking experience for students; looking at what we and our peers expected and desired from a bank. Considering the future of banking and provide future-proofing it in our idea. With all that in mind we made the Virgin One card; the one and only card you'd need, housing all other: credit/debit, store loyalty, gym and work building (NFC), ID and many more."
        />
        <Brief
          title="Insight"
          paragraph="Students / young adults are the best to target for banks, as its
          likely they'll bank with them from then on; pretty much a
          lifetime customer."
          one="wanted to save but didn't know how"
          two="need a more user-friendly peer-to-peer payment system"
          three="discount and offers on thing they would actually wanted"
          postscript="in addition we wanted to predict/innovate - banking without a wallet, peer-to-peer payment etc"
          style={briefStyle}
        />
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
              title="All purpose One card"
              description="The idea was to eradicate the wallet. We are moving into an era of contact-less payment and to innovate further and aid in this this was our answer: a multi-purpose card."
            />
            <CardRight
              key="2"
              image={image.statement.childImageSharp.fluid}
              title="Home / statement"
              byline="Front and centre of the app is where all the most important pieces of information are; the amount in your current account, daily spend and daily budget. The ring is visual representation of the remainder funds of your set budget for that day, also shown in percentage and actual £'s so you can see everything you need at a glance."
              description=" The statement follows showing time, date, business name, sector and amount. The bar beneath it depicts the progress of set monthly spend / comparison to last month. While researching we came to find people want as much information as possible when it comes to finance – it allows for better decision making. With that in mind we went about creating a time-line to match the money trail, whether it be showing bus & metro journeys to meals out."
            />
            <CardLeft
              key="3"
              image={image.goals.childImageSharp.fluid}
              title="Expenditure / goals "
              byline="The pie chart shows the amount in all the categories the customers are spending money in. Beneath that is all the set goals with the progress."
              description="Pie chart: once the user can easily see and understand where they are spending money, it is then they can take action accordingly. 
              
              Goals: the % of money you save on discounts will be put in here along withchange from buying things. For example: say you buy a coffee for £2.20, the amount left of the pound will be put into your savings – in this case 80p will be deposited."
            />
            <CardRight
              key="4"
              image={image.offers.childImageSharp.fluid}
              title="Ofers"
              byline="Local, recommended and popular."
              description="Using location information, relevant offers and deals are shown to the user also taking into consideration previous spending habits. With this data we populate the 'your reward' section, for example: if you are a regular shopper at topman - you'd be given a personal discount on your next purchase. The app is not only helping you monitor your spending but also help you spend more wisely."
            />
          </div>
        </section>
        <section className="divide-3">
          <Card
            key="5"
            image={image.location.childImageSharp.fluid}
            title="Locate"
            description="A map view presenting all the near by deals and offers around your city."
          />
          <Card
            key="6"
            image={image.discount.childImageSharp.fluid}
            title="Reward"
            description="Progress towards their rewards, which is calculated by how many times you visit and how much you spend in store."
          />
          <Card
            key="7"
            image={image.claims.childImageSharp.fluid}
            title="Claims"
            description="The process of claiming an offer shown with the nearest cinema and how many dates till the offer expires."
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
              title="Cards / transfer"
              paragraph="Through experience and research, we discovered how cumbersome it is to pay back someone. You need their sort code & account number which isn’t an easy or user friendly way to transfer money. Making it more of a chore than it already is and with the rise of contact-less technology which allows users to pay via mobile phones, we thought it would make sense to advance that so you can pay each other by simply tapping phones together."
            />
          </div>
          <div className="divide-3">
            <Card
              key="5"
              image={image.profile.childImageSharp.fluid}
              title="Profile"
              description="Located here are all the cards you have synced, along with some essential information at glance"
            />
            <Card
              key="6"
              image={image.pay.childImageSharp.fluid}
              title="Pay"
              description="iInputting the amount you want to send, you either select from the contacts or bump you phone against the person you want to transfer the money to."
            />
            <Card
              key="7"
              image={image.complete.childImageSharp.fluid}
              title="Confirmation"
              description="Once the action is complete, the user is shown the details of the transaction which includes; amount, time, whom it was to and the method of payment."
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default OneCard;
