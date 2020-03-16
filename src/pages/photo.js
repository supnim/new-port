import React from "react"
import Hero from "../components/hero";

import Layout from "../components/layout"
import SEO from "../components/seo"

const Photo = () => (
        <Layout>
      <SEO
        title="photos"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
    <div className="container">
        <Hero />
        <Hero />
    </div>
    </Layout>
)

export default Photo