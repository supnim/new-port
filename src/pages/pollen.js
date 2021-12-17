import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import Pollen from "../../content/assets/thumbnails/pollen-logo.svg"

import Campaign from "../../content/assets/thumbnails/campaign.svg"
import Zendesk from "../../content/assets/thumbnails/zendesk.svg"
import UI from "../../content/assets/thumbnails/UI.svg"
import Designsystem from "../../content/assets/thumbnails/pollen-ds.svg"

function PollenPage() {
	return (
		<Layout>
			<SEO title="Pollen" keywords={[`experience`, `travel`, `music`]} />
			<div className="jobHero">
				<Pollen width="16%" height="16%" className="amazonLogo" />

				<p className="amazonParagraphy" style={{ maxWidth: "800px" }}>
					Experience marketplace dealing in travel and music campaigns
					currenctly a scale-up, recently had there series D funding.{" "}
				</p>
			</div>
			<div className="PollenJobs row">
				<Link className="col-12 campaign" to={`/comingsoon`}>
					<Campaign />
				</Link>

				<Link className="col-5 zendesk" to={`/comingsoon`}>
					<Zendesk width="100%" height="100%" />
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
						margin: "0 auto",
					}}
				>
					<p
						style={{
							fontSize: "24px",
							fontWeight: "bold",
							margin: "1rem",
						}}
					>
						Design language
					</p>
					<p
						style={{
							fontSize: "14px",
						}}
					>
						built out a starter template to help translate files between
						mutliple designers and in-turn allowing for scaling efficiently
					</p>
					<a
						style={{ color: "blue" }}
						href="https://www.figma.com/community/file/1053717424128719359/%F0%9F%8E%BE-%5BFigma-file-structure-template%5D"
					>
						[Template]
					</a>
				</div>
				<Link className="col-12 UI" to={`/comingsoon`}>
					<UI width="100%" height="100%" />
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
						margin: "0 auto",
					}}
				>
					<p
						style={{
							fontSize: "24px",
							fontWeight: "bold",
							margin: "1rem",
						}}
					>
						Onboarding process
					</p>
					<p
						style={{
							fontSize: "14px",
						}}
					>
						Solving for onboarding bottle neck when at scale
					</p>
					<a style={{ color: "blue" }} href="https://www.google.co.uk">
						[Template]
					</a>
				</div>
				<Link className="col-5 pollen-ds" to={`/comingsoon`}>
					<Designsystem width="100%" height="100%" />
				</Link>
			</div>
		</Layout>
	)
}

export default PollenPage
