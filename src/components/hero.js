import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "../utils/css/components/hero.scss"

const hero = () => {
    return (
    <div className="container">
        <div className="hero-image">
        {/* <Image /> */}
        </div>
        <div className="intro">
            <h4>Brief</h4>
            <p>in this project wanted to eradicate wallets</p>
        </div>
    </div>
    );
}

// const heroImage = graphql`
//   query heroImage {
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
// `


export default hero;