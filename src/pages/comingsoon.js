import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function CommingSoon() {
	return (
		<Layout>
			<SEO title="Coming soon" keywords={[`experience`, `travel`, `music`]} />
			<div
				style={{
					backgroundColor: "black",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "60vh",
				}}
			>
				<h2 style={{ color: "white" }}>coming soon</h2>
			</div>
		</Layout>
	)
}

export default CommingSoon
