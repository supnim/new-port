import React from 'react'
// import Image from 'gatsby-image'
import "../utils/css/components/hero.scss"
// import { graphql } from "gatsby"

// import "..css/components/hero.css"

const hero = () => {
    return (
    <div className="container">
        <h1>I am a dickhead</h1>
        <div className="hero-image">
            {/* <Img /> */}
        </div>
        <div className="intro">
            <h3>Brief</h3>
            <p>in this project wanted to eradicate wallets</p>
        </div>
    </div>
    );
}

export default hero;

// const bioQuery = graphql`
//   query BioQuery {
//     avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
//       childImageSharp {
//         fixed(width: 50, height: 50) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         author
//         social {
//           twitter
//         }
//       }
//     }
//   }
// 