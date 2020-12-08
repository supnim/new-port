import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import Amazon from "../../content/assets/thumbnails/amazon_logo_alt.svg";

import Connect from "../../content/assets/thumbnails/primefitness.svg";
import Travel from "../../content/assets/thumbnails/travel_store.svg";
import Music from "../../content/assets/thumbnails/music_branding.svg";
import Student from "../../content/assets/thumbnails/students.svg";
import Social from "../../content/assets/thumbnails/social.svg";

function AmazonPage() {
  return (
    <Layout>
      <SEO
        title="Amazon"
        keywords={[`UX`, `UI`, `london`, `Amazon`, `ecommerce`, `amazon.com`]}
      />
      <div className="jobHero">
        <Amazon width="100%" height="100%" className="amazonLogo" />
        <p className="amazonParagraphy" style={{ maxWidth: "800px" }}>
          An international technology company that focuses on e-commerce, cloud
          computing, digital streaming, and artificial intelligence. During my
          time there I've learnt a great deal; from new skills to different
          methods of approaching, thinking and targeting audiences according to
          the given brief. The tasks widely ranged from branding and content
          creation for social outlets to concepts for ad campaigns. Alongside
          this I was involved in art directing photo-shoots, producing 360 video
          case studies, stakeholder management and much more.
        </p>
      </div>
      <div className="amazonJobs row">
        <Link className="col-7 connect" to={`/primefitness`}>
          <Connect width="100%" height="100%" />
        </Link>
        <Link className="col-5 student" to={`/student`}>
          <Student width="100%" height="100%" />
        </Link>
        <Link className="col-5 travel" to={`/travel`}>
          <Travel width="100%" height="100%" />
        </Link>
        <Link className="col-7 music" to={`/prime-music`}>
          <Music width="100%" height="100%" />
        </Link>
        <Link className="col-12 social" to={`/social`}>
          <Social width="100%" height="100%" />
        </Link>
      </div>
    </Layout>
  );
}

export default AmazonPage;
