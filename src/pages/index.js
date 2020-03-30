// Base
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "../utils/normalize.css";
import "../utils/css/screen.css";

// Skelton
import Helmet from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostCard from "../components/postCard";

// onLoad + theme.scss
// import "../components/onLoad"
import "../script/typing";
import "../utils/css/components/theme.scss";
// import scrollIcon from "/Users/nimeshreghunandanan/Desktop/new-port/content/assets/scrollIcon.svg";
// import Scroll from "../pages/scrollIcon.svg"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  let postCounter = 0;

  return (
    <Layout title={siteTitle}>
      <Helmet>
        <script type="text/javascript" src="src/components/onLoad.js"></script>
      </Helmet>
      <SEO
        title="home"
        keywords={[`product`, `designer`, `london`, `nimesh`, `reghunandanan`]}
      />

      {/* onLoad hero component */}
      {data.site.siteMetadata.description && (
        <header src="../script/typing.js" className="page-head">
          <div>
            <h1 className="page-head-title">Nimesh</h1>
            <h2 className="page-head-sub">
              {data.site.siteMetadata.description}
            </h2>
            <br />
            {/* <Scroll /> */}
            {/* <img src={scrollIcon} alt="scrollicon"></img> */}
          </div>
        </header>
      )}

      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++;
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          );
        })}
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
