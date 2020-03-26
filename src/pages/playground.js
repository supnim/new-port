import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Project from "../templates/project"

const Grounds = () => {
  const image = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profilePic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(image)

  return (
    <div>
      <Layout>
        <Hero />
        <div className="contactImg col-6">
          <figure className="aboutMePic">
            <Img
              className="aboutMePic"
              fluid={image.profilePic.childImageSharp.fluid}
            />
          </figure>
        </div>

        <Project />
      </Layout>
    </div>
  )
}

export default Grounds
