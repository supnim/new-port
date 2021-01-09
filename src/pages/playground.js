import React from "react";
import Layout from "../components/layout";
import Drums from "../components/drums";
import Game from "../components/tic-tac-toe/game";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Grounds() {
  const image = useStaticQuery(graphql`
    query {
      nimisha: file(relativePath: { eq: "projects/nimisha.co.uk.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="video-page">
        <h3>playground</h3>
        <p style={{ paddingBottom: "2rem" }}>
          View on desktop for best experience, as so, some games are hided on
          mobile.
        </p>
        <Drums />
        <div style={{ display: "flex" }}>
          <Game />
        </div>
        <section style={{ padding: "4rem 0" }}>
          <div style={{ margin: "0 auto" }}>
            <h3>portolio website</h3>
          </div>
          <div style={{ width: "50vw", margin: "2rem auto" }}>
            <a href="https://www.nimisha.co.uk">
              <Img fluid={image.nimisha.childImageSharp.fluid} />
            </a>
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                maxWidth: "50%",
                fontSize: "80px",
                margin: "1rem auto",
                borderRadius: ".5rem",
                textAlign: "center"
              }}
            >
              <pre style={{ padding: ".5rem" }}>
                <code>
                  a CMS based portfolio {"\n"} made using prismic.com
                  {"\n"}
                </code>
              </pre>
            </div>
          </div>
        </section>
        <section style={{ padding: "4rem 0" }}>
          <div style={{ margin: "0 auto" }}>
            <h3>recipe app </h3>
          </div>
          <div style={{ width: "50vw", margin: "2rem auto" }}>
            <iframe
              src="https://codesandbox.io/embed/recipe-app-lovfq?fontsize=14&hidenavigation=1&theme=dark&view=preview"
              style={{
                width: "100%",
                height: "500px",
                border: "0",
                borderRadius: "4px",
                overflow: "hidden"
              }}
              title="Recipe App"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                maxWidth: "50%",
                fontSize: "80px",
                margin: "1rem auto",
                borderRadius: ".5rem",
                textAlign: "center"
              }}
            >
              <pre style={{ padding: ".5rem", textAlign: "center" }}>
                <code>Recipe app // learnings of API's</code>
              </pre>
            </div>
          </div>
        </section>

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
