import React from "react"
import "../utils/css/screen.css"
import Layout from "../components/layout"
import VideoBox from "../components/videoBox"
import path from "../components/videoPaths.js"

function Video() {
  const videoUrl = path.map(video => (
    <VideoBox description={video.description} url={video.url} id={video.id} />
  ))
  return (
    <div className="video-page">
      <Layout>
        <h3>videography</h3>
        <br />
        {videoUrl}
      </Layout>
    </div>
  )
}

export default Video
