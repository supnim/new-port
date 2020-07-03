import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import "../../src/utils/css/project.scss";
import Hero from "../components/hero";
import Brief from "../components/brief";
import Card from "../components/card";
import TitleP from "../components/TitleP";
import VideoBox from "../components/videoBox";

import BookwiseHeroImg from "../../content/assets/heros/bookwise_hero.svg";

// Assembling imported content
const cardData = [
  {
    imageName: "dashboard",
    title: "dashboard",
    paragraph:
      "the home page; first point of contact with the students. the pupils are shown their timetable alongside a profile card listing the most important details e.g. current stats, tutor and house block. below are all the subjects the individuals takes at school; which allows quick access to classroom materials. then beneath that is two sections; one the upcoming events tracker, giving you information such as the due date for homework and progression of the certain piece of work. second; showing all the groups the students are assigned to."
  },
  {
    imageName: "profile",
    title: "profile",
    paragraph:
      "students can compare themselves to each class and keep on track of homework and exams. along with a file management section and a calendar to help keep pupils stay organized."
  },
  {
    imageName: "subject",
    title: "subject",
    paragraph:
      "on this page you can find revision materials, groups in the class, upcoming homework or exams. the graph displays the progress of student vs. class."
  },
  {
    imageName: "group",
    title: "groups",
    paragraph:
      "members within the group are shown at the top. the learning objectives set by the teacher are underneath and at the bottom all the files and notes that are shared."
  },
  {
    imageName: "library",
    title: "library",
    paragraph:
      "on this page, you can find revision materials, groups, upcoming homework and exams. the graph displays the progress of student vs. class."
  },
  {
    imageName: "note",
    title: "files",
    paragraph:
      "all learning material such as interactive textbooks, revision guides and cliff notes are stored here. beneath that are all the taken notes."
  }
];

function Bookwise() {
  //cards
  const column1Data = (cardData && [...cardData].splice(0, 1)) || [];
  const column2Data = (cardData && [...cardData].splice(1, 2)) || [];
  const column3Data = (cardData && [...cardData].splice(-3)) || [];
  // collection images
  const image = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profilePic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dashboard: file(relativePath: { eq: "projects/bookwise/dashboard.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      profile: file(relativePath: { eq: "projects/bookwise/profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      subject: file(relativePath: { eq: "projects/bookwise/subject.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      group: file(relativePath: { eq: "projects/bookwise/group.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      library: file(relativePath: { eq: "projects/bookwise/library.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      note: file(relativePath: { eq: "projects/bookwise/note.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  //rendering them ^
  const getImageFor = id => {
    if (!image || !image[id]) {
      return null;
    }
    const {
      childImageSharp: { fluid }
    } = image[id];

    return fluid || null;
  };

  const mapCard = ({ title, imageName, paragraph }) => (
    <Card
      key={`${title}_${imageName}`}
      image={getImageFor(imageName)}
      title={title}
      description={paragraph}
    />
  );

  return (
    <div>
      <Layout>
        <SEO
          title="Bookwise"
          keywords={[`product`, `designer`, `london`, `nimesh`]}
        />
        <BookwiseHeroImg width="100%" height="100%" />
        <Hero
          // heroImg="profilePic" //need it or breaks it
          heroTitle="Brief"
          heroParagraphy="Find a problem and solve it in 6 weeks. The problem:
           the education system is flawed; everyone learns differently but get
            taught the same. Being an introvert or extrovert shouldn't play a
            factor in learning nor should the slow learners limit the fast ones."
        />
        <Brief
          briefTitle="Solution"
          briefParagraphy="Create an immersive application for students to learn and share knowledge in a collaborative way. To break down the barriers that was set by old fashion/outdated teaching methods; making it less liner and more collective. I set out to solve these problems with the implementation of:"
          one="peer-to-peer learning"
          two="using technology to remove language and shyness as a
          factor"
          three="make it intuitive as pencil and pad"
          postscript=""
        />
        <container
          style={{ maxWidth: "1200px", margin: "0 auto" }}
          className="row"
        >
          <section className="divide-1">{column1Data.map(mapCard)}</section>
          <section className="divide-2">{column2Data.map(mapCard)}</section>
          <section className="divide-3">{column3Data.map(mapCard)}</section>
          <section className="row full">
            <div
              className="col-8"
              style={{
                alignItems: "center",
                textAlign: "center",
                padding: "0 4rem",
                width: "50%",
                margin: "0 auto"
              }}
            >
              <TitleP
                title="admin control"
                paragraph="teachers share some similar elements as the students such as the timetable and homework. the file system for each class taught is shown along with the students in the class. at the bottom is the controls to take over the devices in the classroom, and this is used to demonstrate and monitor work. the right image shows all the active devices in the classroom that are in use."
              />
              <VideoBox
                url="https://player.vimeo.com/video/168932343?title=0&byline=0&portrait=0"
                description="p.s concept got proven by apple in their latest iteration of ipad aimed at the education sector: here is the keynote summarised by verge."
              />
            </div>
          </section>
        </container>
      </Layout>
    </div>
  );
}

export default Bookwise;

//link in video descprition
// uniform images
