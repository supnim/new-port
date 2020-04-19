import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Template from "../templates/project";
import { graphql, useStaticQuery } from "gatsby";

import Hero from "../../content/assets/heros/bookwise_hero.svg";

import data from "../components/bookwiseData";

const Bookwise = () => {
  const hero = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profilePic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const card = ["one", "two", "three"];
  return (
    <div className="contactBox">
      <Layout>
        <SEO
          title="Contact"
          keywords={[`product`, `designer`, `london`, `nimesh`]}
        />
        <Hero />
        <Template
          //hero
          hero={hero.profilePic.childImageSharp.fluid}
          heroTitle="brief"
          heroParagraphy="an immersive application for students to learn differently and collaboratively. i did this by breaking down the barriers that are created in old fashion/outdated language and removing shyness as a factor in learning. by downward convergence, i made it easier for students to better grasp the text as there is less of a learning curve through language limitations. another goal was to make note-taking as intuitive as pencil and pad. the concept has now been proven, scroll to the bottom to see."
          //insight
          title="Insights"
          paragraphy="the education system is flawed; everyone learns differently but get taught the same. being an introvert or extrovert shouldn't play a factor in learning nor should the slow learners limit the quick ones. i aim to solve these problems with the implementation of:"
          one="collaborative learning"
          two="using technology to aid teachers and students"
          three="interaction to be intuitive as possible"
          postscript=""
          cardImg={hero.profilePic.childImageSharp.fluid}
          cardTitle={["card title goes here", "another title"]}
          cardParagraphy="card paragraphy"
        />
      </Layout>
    </div>
  );
};

export default Bookwise;

// trying to filter bookwiseData through Template
