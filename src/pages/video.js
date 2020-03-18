import React from "react";
// import { graphql } from "gatsby"
import Layout from "../components/layout";
import VideoBox from "../components/videoBox";
import path from "../components/videoPaths.js";

function Video() {
  // const videoUrl = path.maps(video => <VideoComp video="{video}"/>)
  const videoUrl = path.map(video => (
    <VideoBox description={video.description} url={video.url} id={video.id} />
  ));

  return (
    <div>
      <Layout>
        <h1>FILMS</h1>
        {videoUrl}
        <VideoBox />
      </Layout>
    </div>
  );
}

export default Video;
