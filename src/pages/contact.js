import React from "react"
import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  // const image = useStaticQuery(graphql`
  //   query {
  //     profilePic: file(relativePath: { eq: "images/profilePic.jpg" }) {
  //       childImageSarp {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contact"
        keywords={[`product`, `designer`, `london`, `nimesh`]}
      />

      <article className="page-template">
        <div className="post-content-body contact">
          <div className="contactImg col-6">
            {/* <figure className="aboutMePic"> */}
            {/* <Img
                className="aboutMePic"
                fluid={image.profilePic.childImageSharp.fluid}
              /> */}
            {/* </figure> */}
          </div>
          <div className="aboutMe col-6">
            <h3 className="aboutMeTitle">
              hi, i am nimesh a conceptual creative based in london
            </h3>
            <p>
              practising in the field of digital products and UI/UX. I enjoy the
              process of taking an idea from concept to completion through a
              variety of different methods and journeys. i am constantly
              striving to better myself, a drive that is reflected in my work.
              my enjoyment for my craft stems not just from within, but from
              others too, as i thrive in diverse, social situations. these
              invaluable experience allow me to expand my understanding of
              different disciplines and build my skill set.
            </p>
            <p>
              In my downtime, i play with different mediums including; music,
              still and motion pictures, and designing and developing websites.
            </p>
            <p>
              Born in Kuwait and brought up in Kerala, India, grew into an
              interactive media designer (IMD) at Northumbria University in
              Newcastle. now practising at <a href="https://www.tes.com">Tes</a>{" "}
              in London.
            </p>
            <span className="contactSpan">––––––––––––––––––––––</span>
            <p>
              hope you have enjoyed looking through my work. if you'd like to
              dicuss new projects or opportunities; get in touch or find me on{" "}
              <a href="https://www.linkedin.com/in/nimeshreghunandanan/">
                linkedin.
              </a>{" "}
            </p>
          </div>
        </div>
      </article>
      <section className="contactButtons contact">
        <ul className="actions fit">
          <li>
            <a href="/" className="cv button large primary">
              CV
            </a>
          </li>
          <li>
            <a href="/" className="button large">
              Get in touch
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
