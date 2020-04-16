import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import Tes from "../../content/assets/thumbnails/tes.svg";

import Schools from "../../content/assets/thumbnails/tes_for_school.svg";
import Pagebuilder from "../../content/assets/thumbnails/page_builder.svg";
import Institute from "../../content/assets/thumbnails/institute.svg";
import Designsystem from "../../content/assets/thumbnails/design_system.svg";

function AmazonPage() {
  return (
    <Layout>
      <SEO
        title="home"
        keywords={[`UX`, `UI`, `london`, `amazon`, `ecommerce`]}
      />
      <div className={"jobHero"}>
        <Tes className={"amazonLogo"} />
        <p className={"amazonParagraphy"}>
          is the uk's largest network for teachers and schools, with an
          increasingly large global footprint. originally the times educational
          supplement, tes has transformed into a truly saas business in the last
          3 years. as the main designer for news and magazine, i facilitate the
          uninterrupted output of a 100-year-old running editorial team. i head
          up the production and implementation of the design system, alongside
          constructing a component-based cms, operating on 60% of tes's main
          site. through this, we were able to focus on the company as a single
          entity, deliver a more integrated and fluid user experience.
        </p>
      </div>
      <div className="tesJobs row">
        <Link className="col-7 design" to={`/design`}>
          <Designsystem />
        </Link>
        <Link className="col-5 pagebuilder" to={`/pagebuilder`}>
          <Pagebuilder />
        </Link>
        <Link className="col-5 institute" to={`/institute`}>
          <Institute />
        </Link>
        <Link className="col-7 school" to={`/school`}>
          <Schools />
        </Link>
      </div>
    </Layout>
  );
}

export default AmazonPage;
