import React from "react"
import { graphql, StaticQuery } from "gatsby"

import "../utils/css/screen.css"
import Layout from "../components/layout"
import VideoBox from "../components/videoBox"
import path from "../components/videoPaths.js"
import { Frame, Scroll, useCycle } from "framer"

const Video = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const videoUrl = path.map(video => (
    <VideoBox description={video.description} url={video.url} id={video.id} />
  ))
  return (
    <div className="video-page">
      <Layout title={siteTitle}>
        <h3>videography</h3>
        <br />
        {videoUrl}
      </Layout>
    </div>
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
    render={data => <Video location={props.location} data={data} {...props} />}
  />
)
