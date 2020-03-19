import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"

function Photo() {
  return (
    <div>
      <Layout>
        <SEO
          title="photos"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Gallery />
      </Layout>
    </div>
  )
}

export default Photo

// const siteTitle = data.site.siteMetadata.title
