import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../templates/project"


function Photo() {
  return (
    <div>
      <Layout >
        <SEO
          title="photos"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}/>
        <Project />
      </Layout>
    </div>
  )
}

export default Photo



// const siteTitle = data.site.siteMetadata.title