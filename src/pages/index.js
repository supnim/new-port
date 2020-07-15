// Base
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "../utils/normalize.css";
import "../utils/css/screen.css";

// Skelton
import Layout from "../components/layout";
import SEO from "../components/seo";
// import PostCard from "../components/postCard" // article card
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

// Component + theme
import "../script/typing";
import "../utils/css/components/theme.scss";
import ScrollIcon from "../../content/assets/scrollIcon.svg";
import Amazon from "../../content/assets/thumbnails/amazon_logo.svg";
import Tes from "../../content/assets/thumbnails/tes.svg";
import Bookwise from "../../content/assets/thumbnails/bookwise.svg";
import OneCard from "../../content/assets/thumbnails/one_card.svg";
import Knowhere from "../../content/assets/thumbnails/knowhere.svg";
import Volvic from "../../content/assets/thumbnails/volvic.svg";

import Methodogly from "../components/meth";

// import OnLoad from "../components/onLoad"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const Index = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  //article vvv
  // const posts = data.allMarkdownRemark.edges
  // let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="product designer"
        keywords={[`product`, `designer`, `london`, `nimesh`, `reghunandanan`]}
      />

      {/* onLoad hero component */}
      {/* <OnLoad /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <div src="../script/typing.js">
            <h1 className="page-head-title">Nimesh</h1>
            <h2 className="page-head-sub">
              {data.site.siteMetadata.description}
            </h2>
            <br />
            <a onClick={() => scrollTo("#jobs")}>
              <ScrollIcon
                alt="scrollicon"
                style={{
                  fill: "white",
                  marginTop: "4rem",
                  height: "40px",
                  width: "40px",
                  paddingTop: "1rem"
                }}
              />
            </a>
          </div>
        </header>
      )}
      <section className="jobwrapper">
        <div className="row jobs" id="jobs">
          <Link aria-label="tes projects" className="col-7 tes" to={`/tes`}>
            <Tes width="100%" height="80%" />
          </Link>
          <Link
            aria-label="amazon projects"
            className="col-5 amazon"
            to={`/amazon`}
          >
            <Amazon width="100%" height="100%" />
          </Link>
        </div>
        <div className="row jobs">
          <Link
            aria-label="onecard project"
            className="col-5 one-card"
            to={`/one-card`}
          >
            <OneCard width="100%" height="100%" />
          </Link>
          <Link
            aria-label="bookwise project"
            className="col-7 bookwise"
            to={`/bookwise`}
          >
            <Bookwise width="100%" height="100%" />
          </Link>
        </div>
        <div className="row jobs">
          <Link
            aria-label="knowhere project"
            className="col-7 knowhere"
            to={`/knowhere`}
          >
            <Knowhere width="100%" height="100%" />
          </Link>
          <Link
            aria-label="volvic project"
            className="col-5 volvic"
            to={`/volvic`}
          >
            <Volvic width="100%" height="100%" />
          </Link>
        </div>
        <Methodogly />
        <div className="graphy row">
          <Link
            aria-label="look at pictures"
            className="col-4 look"
            to={`/photo`}
          >
            <p>LOOK</p>
          </Link>
          <Link
            aria-label="listen to music"
            className="col-4 listen"
            to={`/audio`}
          >
            <p>LISTEN</p>
          </Link>
          <Link aria-label="watch videos" className="col-4 watch" to={`/video`}>
            <p>WATCH</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Index location={props.location} props data={data} {...props} />
    )}
  />
);

/*
      //blog posts
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div> */
