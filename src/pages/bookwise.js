import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";

import Hero from "../components/hero";
import Brief from "../components/brief";
import Card from "../components/card";
import TitleP from "../components/TitleP";
import VideoBox from "../components/videoBox";

// import BookwiseHeroImg from "../../content/assets/heros/bookwise_hero.svg"

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
      library: file(relativePath: { eq: "projects/bookwise/library.jpg" }) {
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
    <div className="contactBox">
      <Layout>
        <SEO
          title="Contact"
          keywords={[`product`, `designer`, `london`, `nimesh`]}
        />
        <Hero
          heroImg={getImageFor("profilePic")}
          heroTitle="brief"
          heroParagraphy="an immersive application for students to learn differently and collaboratively. i did this by breaking down the barriers that are created in old fashion/outdated language and removing shyness as a factor in learning. by downward convergence, i made it easier for students to better grasp the text as there is less of a learning curve through language limitations. another goal was to make note-taking as intuitive as pencil and pad. the concept has now been proven, scroll to the bottom to see."
        />
        <Brief
          briefTitle="Insights"
          briefParagraphy="the education system is flawed; everyone learns differently but get taught the same. being an introvert or extrovert shouldn't play a factor in learning nor should the slow learners limit the quick ones. i aim to solve these problems with the implementation of:"
          one="collaborative learning"
          two="using technology to aid teachers and students"
          three="interaction to be intuitive as possible"
          postscript=""
        />
        <container>
          <section className="divid-1">{column1Data.map(mapCard)}</section>
          <section className="divid-2">{column2Data.map(mapCard)}</section>
          <section className="divid-3">{column3Data.map(mapCard)}</section>
          <section className="row full">
            <div className="col-12">
              <TitleP
                title="admin control"
                paragraph="teachers share some similar elements as the students such as the timetable and homework. the file system for each class taught is shown along with the students in the class. at the bottom is the controls to take over the devices in the classroom, and this is used to demonstrate and monitor work. the right image shows all the active devices in the classroom that are in use."
              />
              <div className="divid-2">
                <Card cardImg={image.profilePic.childImageSharp.fluid} />
                <Card cardImg="somehting" />
              </div>
            </div>
          </section>
          <section className="row full">
            <div className="col-12">
              <VideoBox
                src="https://www.youtube.com/watch?v=6bwmlRzt8TE"
                description="p.s concept got proved by apple in their latest iteration of ipad aimed at the education sector: here is the keynote summarised by verge."
              />
            </div>
          </section>
        </container>
      </Layout>
    </div>
  );
}

export default Bookwise;

// trying to filter bookwiseData through Template
