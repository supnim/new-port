import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import Tes from "../../content/assets/thumbnails/tes.svg";

import Schools from "../../content/assets/thumbnails/tes_for_school.svg";
import Pagebuilder from "../../content/assets/thumbnails/page_builder.svg";
import Institute from "../../content/assets/thumbnails/institute.svg";
import Designsystem from "../../content/assets/thumbnails/design_system.svg";
import Redesign from "../../content/assets/thumbnails/redesign.svg";

function TesPage() {
  return (
    <Layout>
      <SEO
        title="Tes Global"
        keywords={[
          `global`,
          `teaching`,
          `london`,
          `publication`,
          `education`,
          `times`,
          `supplyment`,
          `teachers`
        ]}
      />
      <div className="jobHero">
        <Tes width="70%" height="70%" className="amazonLogo" />
        <p className="amazonParagraphy" style={{ maxWidth: "800px" }}>
          A 100-year-old publication originally started as Times Educational
          Supplement. Currently in the transformation into a SaaS business. I
          head up the production and implementation of the design system,
          alongside constructing a component-based CMS, which makes up for more
          than 60% of the site and through this, we were able to focus on the
          company as a single entity, deliver a more integrated and fluid user
          experience.
        </p>
      </div>
      <div className="tesJobs row">
        <Link className="col-12 redesign" to={`/redesign`}>
          <Redesign width="100%" height="100%" />
        </Link>
        <Link className="col-7 design" to={`/design-system`}>
          <Designsystem width="100%" height="100%" />
        </Link>
        <Link className="col-5 pagebuilder" to={`/pagebuilder`}>
          <Pagebuilder width="100%" height="100%" />
        </Link>
        <Link className="col-5 institute" to={`/institute`}>
          <Institute width="100%" height="100%" />
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
            Bread & butter
          </p>
          <p
            style={{
              fontSize: "14px"
            }}
          >
            Along with these other projects, I evolved news and built out the
            digital version of the magazine. Added podcasts and audio article
            functionalities to the medium of the content offered.
          </p>
        </div>
        <Link className="col-12 school" to={`/school`}>
          <Schools width="100%" height="100%" />
        </Link>
      </div>
    </Layout>
  );
}

export default TesPage;
