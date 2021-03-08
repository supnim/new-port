import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import Amazon from "../../content/assets/thumbnails/amazon_logo_alt.svg";

import Connect from "../../content/assets/thumbnails/primefitness.svg";
import Travel from "../../content/assets/thumbnails/travel_store.svg";
import Music from "../../content/assets/thumbnails/music_branding.svg";
import Student from "../../content/assets/thumbnails/music_for_students.svg";
import Social from "../../content/assets/thumbnails/social.svg";

import Alexa from "../../content/assets/thumbnails/alexa.svg";
import Primeday from "../../content/assets/thumbnails/primeday.svg";

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
        <div
          className="col-7"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "600px",
            padding: "2rem",
            margin: "0 auto"
          }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              margin: "1rem"
            }}
          >
            360 video
          </p>
          <p
            style={{
              fontSize: "14px"
            }}
          >
            I wanted to test out the medium of 360 videos and put forward a case
            study in which I got buy-in to go document the London Pride parade,
            which Amazon Music was a sponsor of. The aim was to learn more about
            the technology and see if we can incorporate it.
          </p>
        </div>
        <Link className="col-7 alexa" to={`/alexa`}>
          <Alexa width="100%" height="100%" />
        </Link>
        <Link className="col-5 primeday" to={`/primeday`}>
          <Primeday width="100%" height="100%" />
        </Link>
        <div
          className="col-5"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "600px",
            padding: "2rem",
            margin: "0 auto"
          }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              margin: "1rem"
            }}
          >
            Art direction
          </p>
          <p
            style={{
              fontSize: "14px"
            }}
          >
            I worked on couple of big photoshoots, all the way from ideations to
            set designing to art directing.
          </p>
        </div>
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
