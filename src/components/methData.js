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

import { graphql, useStaticQuery } from "gatsby";

// import design from "../../content/assets/methBackgrounds/design.png"

// console.log(design)

// const MethBackground = ({ background }) => {

//   const image = useStaticQuery(graphql`
//       query {
//         profilePic: file(relativePath: { eq: "profilePic.jpg" }) {
//           childImageSharp {
//             fluid(maxWidth: 1000) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `);
//   }

//     fluid={image.profilePic.childImageSharp.fluid}

// BACKGROUND IMAGE
// const image = useStaticQuery(graphql`
//   query {
//     profilePic: file(relativePath: { eq: "profilePic.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     dashboard: file(relativePath: { eq: "projects/bookwise/dashboard.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     profile: file(relativePath: { eq: "projects/bookwise/profile.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     subject: file(relativePath: { eq: "projects/bookwise/subject.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     group: file(relativePath: { eq: "projects/bookwise/group.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     library: file(relativePath: { eq: "projects/bookwise/library.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     note: file(relativePath: { eq: "projects/bookwise/note.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `)
// //rendering them ^
// const getImageFor = (id) => {
//   if (!image || !image[id]) {
//     return null
//   }
//   const {
//     childImageSharp: { fluid },
//   } = image[id]

//   return fluid || null
// }

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
      "use data, understand behaviours, A/B test, new ideas and start V2"
  },
  {
    id: 8,
    icon: FaSyncAlt,
    title: "loop",
    background: "background8",
    standfirst:
      "fairly simple, start gain. new goals new needs a never ending cycle of iteration"
  }
];
