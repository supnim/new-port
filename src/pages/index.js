// Base
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "../utils/normalize.css";
import "../utils/css/screen.css";

// Skelton
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostCard from "../components/postCard";
import { Link } from "gatsby";

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
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  let postCounter = 0;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="home"
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
          </div>
        </header>
      )}
      <div className="row jobs">
        <Link className="col-7 tes" to={`/tes`}>
          <Tes />
        </Link>
        <Link className="col-5 amazon" to={`/amazon`}>
          <Amazon />
        </Link>
      </div>
      <div className="row jobs">
        <Link className="col-5 one-card" to={`/one-card`}>
          <OneCard />
        </Link>
        <Link className="col-7 bookwise" to={`/bookwise`}>
          <Bookwise />
        </Link>
      </div>
      <div className="row jobs">
        <Link className="col-7 knowhere" to={`/knowhere`}>
          <Knowhere />
        </Link>
        <Link className="col-5 volvic" to={`/volvic`}>
          <Volvic />
        </Link>
      </div>

      {/* <div className="post-feed">
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
      </div> */}

      <Methodogly />
      <div className="watchLook row">
        <Link className="col-6 watch" to={`/video`}>
          <p>WATCH</p>
        </Link>
        <Link className="col-6 look" to={`/photo`}>
          <p>LOOK</p>
        </Link>
      </div>
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
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
);
