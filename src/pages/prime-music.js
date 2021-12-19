import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import "../../src/utils/css/project.css"
import Img from "gatsby-image"
import TitleP from "../components/TitleP"
import Brief from "../components/brief"

import PrimeMusiclHero from "../../content/assets/heros/music_branding_hero.svg"

function DesignSystem() {
	const image = useStaticQuery(graphql`
		query {
			best: file(relativePath: { eq: "projects/music-branding/best.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			cutting: file(
				relativePath: { eq: "projects/music-branding/cutting.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			iphone: file(relativePath: { eq: "projects/music-branding/iphone.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			unlimited: file(
				relativePath: { eq: "projects/music-branding/unlimited.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<div>
			<Layout>
				<SEO
					title="Music Branding"
					keywords={[`prime`, `music`, `branding`, `cover`, `art`]}
				/>
				<PrimeMusiclHero width="100%" height="auto" />
				<section style={{ padding: "4rem 0" }}>
					<Brief
						title="Aim"
						paragraph="to create a coherent style for the upcoming playlist launch to used for online campaigns and across platform"
					/>
					<div style={{ textAlign: "center" }}>
						<TitleP
							title="Unlimited playlist"
							paragraph="A collection of specially curated playlists to reflect a variety of moods."
						/>
						<Img
							fluid={image.unlimited.childImageSharp.fluid}
							alt="unlimited album artwork"
						/>
					</div>
				</section>
				<Img fluid={image.iphone.childImageSharp.fluid} alt="in situ" />
				<section style={{ padding: "4rem 0" }}>
					<div style={{ textAlign: "center" }}>
						<TitleP
							title="Cutting Edge"
							paragraph="Artwork aimed at the connoisseurs of the genre."
						/>
					</div>
					<Img
						fluid={image.cutting.childImageSharp.fluid}
						alt="cutting edge album artwork"
					/>
				</section>
				<section style={{ padding: "4rem 0" }}>
					<div style={{ textAlign: "center" }}>
						<TitleP
							title="Best of 2017 so far"
							paragraph="The following playlist artworks represent the best of the year in their respected categories."
						/>
					</div>
					<Img
						fluid={image.best.childImageSharp.fluid}
						alt="Best of 2017 album artwork"
					/>
				</section>
			</Layout>
		</div>
	)
}

export default DesignSystem
