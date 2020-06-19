import {
  FaBraille,
  FaBicycle,
  FaEye,
  FaObjectGroup,
  FaFile,
  FaCubes,
  FaFileAlt,
  FaSyncAlt
} from "react-icons/fa";

import Design from "../../content/assets/icon/design.svg";

import { graphql, useStaticQuery } from "gatsby";

// import design from "../../content/assets/methBackgrounds/design.png"

// console.log(design)

// // fluid={image.profilePic.childImageSharp.fluid}

// const image = useStaticQuery(graphql`
//   query {
//     profilePic: file(relativePath: { eq: "profilePic.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `)

export default [
  {
    id: 1,
    icon: FaEye,
    title: "understand",
    background: "design",
    standfirst:
      "find out goals  and strategy, collect information, ask questions"
  },
  {
    id: 2,
    icon: FaBicycle,
    title: "explore",
    background: "background2",
    standfirst:
      "envision, hypothesise and ideate, develop lots of solutions with all parts of business"
  },
  {
    id: 3,
    icon: FaBraille,
    title: "plan",
    background: "background3",
    standfirst:
      "choose the best, wirefrime idea and project the products coming journey"
  },
  {
    id: 4,
    icon: FaObjectGroup,
    title: "design",
    background: "background4",
    standfirst:
      "bring ideas to life, prototype, focusing on usability and experiment"
  },
  {
    id: 5,
    icon: FaFile,
    title: "test",
    background: "background5",
    standfirst:
      "show prototypes to users outside of co. learn what doesn’t work "
  },
  {
    id: 6,
    icon: FaCubes,
    title: "develop",
    background: "background6",
    standfirst: "break-down and organise to build MVP (Minimum Viable Product)"
  },
  {
    id: 7,
    icon: FaFileAlt,
    title: "test again",
    background: "background7",
    standfirst:
      "use data, understand behaviours, A/B test, new ideas and start version 2"
  },
  {
    id: 8,
    icon: FaSyncAlt,
    title: "loop",
    background: "background8",
    standfirst:
      "fairly simple, start again. new goals, new needs, a never ending cycle of iteration"
  }
];
