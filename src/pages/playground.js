import React from "react";
import Layout from "../components/layout";
import Drums from "../components/drums";
import Game from "../components/tic-tac-toe/game";

function Grounds() {
  return (
    <Layout>
      <div className="video-page">
        <h3>playground</h3>
        <Drums />
        <div style={{ display: "flex" }}>
          <Game />
        </div>
        <div>
          <h4
            style={{
              color: "grey",
              textAlign: "center",
              padding: "18rem 0",
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
