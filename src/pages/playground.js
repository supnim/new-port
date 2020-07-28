import React from "react";
import Layout from "../components/layout";
import Drums from "../components/drums";
function Grounds() {
  return (
    <Layout>
      <div className="video-page">
        <h3>playground</h3>
        <Drums />
        <div>
          <h4
            style={{
              color: "grey",
              textAlign: "center",
              paddingBottom: "8rem",
              margin: "0"
            }}
          >
            More soon...
          </h4>
        </div>
      </div>
    </Layout>
  );
}

export default Grounds;
