import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import "../../src/utils/css/project.css"
import CardLeft from "../components/cardLeft"
import CardRight from "../components/cardRight"
import TitleP from "../components/TitleP"
import Brief from "../components/brief"
import Carousel from "../components/carousel"
import Card from "../components/card"
import Img from "gatsby-image"

import PagebuilderImg from "../../content/assets/heros/pagebuilder_hero.svg"
import Time from "../../content/assets/projects/pagebuilder/time.svg"
import Autonomy from "../../content/assets/projects/pagebuilder/autonomy.svg"
import Consistency from "../../content/assets/projects/pagebuilder/consistency.svg"

import CardIcon from "../components/cardIcon"
import Clipboard from "../../content/assets/projects/design-system/clipboard.svg"
import Hundred from "../../content/assets/projects/pagebuilder/hundred.svg"
import ClockTwo from "../../content/assets/projects/design-system/clockTwo.svg"

import One from "../../content/assets/projects/design-system/one.svg"
import Two from "../../content/assets/projects/design-system/two.svg"
import Three from "../../content/assets/projects/design-system/three.svg"

function Pagebuilder() {
	const image = useStaticQuery(graphql`
		query {
			design: file(
				relativePath: { eq: "projects/pagebuilder/design-system.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			drupal: file(relativePath: { eq: "projects/pagebuilder/drupal.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			flex: file(relativePath: { eq: "projects/pagebuilder/flexibility.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			configure: file(
				relativePath: { eq: "projects/pagebuilder/configure.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			structure: file(
				relativePath: { eq: "projects/pagebuilder/structure.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			example1: file(
				relativePath: { eq: "projects/pagebuilder/example1.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			example2: file(
				relativePath: { eq: "projects/pagebuilder/example2.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			example3: file(
				relativePath: { eq: "projects/pagebuilder/example3.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			wip: file(relativePath: { eq: "projects/pagebuilder/wip.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			CMSstructure: file(
				relativePath: { eq: "projects/pagebuilder/CMS_structure.jpg" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			design_sprint: file(
				relativePath: { eq: "projects/pagebuilder/Design_Sprint.jpg" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	const briefStyle = {
		margin: "4rem auto",
		color: "black",
		backgroundColor: "white",
		border: "2px black solid",
		padding: "4rem",
	}

	return (
		<div>
			<Layout>
				<SEO
					title="Pagebuilder"
					keywords={[`CMS`, `Drupal`, `management`, `content`, `system`]}
				/>
				<PagebuilderImg width="100%" height="auto" />
				<div style={{ margin: "0 2rem" }}>
					<Brief
						style={briefStyle}
						title="Aim"
						paragraph={
							<p>
								to build a CMS which in turn removes dependency and create
								autonomy – basing it of the{" "}
								<a href="/design-system">
									<b>design system </b>
								</a>
								to form consistency and site-wide unity.
							</p>
						}
					/>
				</div>
				<section
					style={{
						margin: "0 auto",
						padding: "4rem 0",
					}}
				>
					<div
						style={{
							padding: "2rem",
							textAlign: "center",
							maxWidth: "800px",
							margin: "0 auto",
						}}
					>
						<TitleP
							title="Why"
							paragraph={
								<p>
									while making{" "}
									<a href="/institute">
										<b>Institute</b>
									</a>{" "}
									and{" "}
									<a href="/school">
										<b>Tes for schools</b>
									</a>{" "}
									we realise this isn't an efficient way of working; creating
									bespoke pages each time Content, Marketing or Institute wanted
									one. It would be much better to create a toolset that allowed
									them to create and manage their own pages, without relying on
									anyone.
									<br />
									<i>
										Give a man a fish and you feed him for a day; teach a man to
										fish and you feed him for a lifetime type move.
									</i>
								</p>
							}
						/>
					</div>
					<div
						style={{
							padding: "4rem 0",
							display: "flex",
							justifyContent: "space-evenly",
							flexWrap: "wrap",
						}}
					>
						<Time />
						<Autonomy />
						<Consistency />
					</div>
					<div
						style={{
							textAlign: "center",
							marginTop: "8rem",
						}}
					>
						<b
							className="title"
							style={{
								fontSize: "32px",
								textAlign: "center",
							}}
						>
							Who
						</b>
						<br />
						<br />
						<Img fluid={image.CMSstructure.childImageSharp.fluid} />
					</div>
					<section style={{ backgroundColor: "#f4f4f4" }}>
						<div
							style={{
								padding: "2rem",
								textAlign: "center",
								maxWidth: "1000px",
								margin: "0 auto",
							}}
						>
							<h3>How?</h3>
							<div
								style={{
									textAlign: "left",
									maxWidth: "800px",
									margin: "0 auto",
								}}
							>
								<p style={{ margin: "2rem 0" }}>
									<One />
									<br />
									<br />
									Discovery: My product manager and I ran a workshop with all
									the stakeholder (editorial, marketing & institute). This was a
									sticky note exercise whereby we asked them to write down
									everything they wanted from this tool and one by one we as a
									collective categorise them into either; must-have, should-have
									or nice-to-have.
									<br />
									<br /> must = essential for day-to-day
									<br /> should = tool that is missing that would add value
									<br />
									nice = bonuses and improved quality of life
								</p>
								<p style={{ margin: "4rem 0" }}>
									<Two />
									<br />
									<br />
									Prioritisation: Once the loose prioritisation was defined by
									the stakeholders, we (PE, PM and I) went off and further
									grouped and prioritised into small chunks of work. Accounting
									for what pieces needed to be done, in what order to allow for
									a smooth unobstructed build.
								</p>
								<p style={{ margin: "2rem 0" }}>
									<Three />
									<br />
									<br />
									Design sprint: Finally, once the groups of components were
									signed off. I started designing, in total there were about 6/7
									sets and each set made up of 5 to 8 pieces and each sprint
									lasted about one week. <br />
									<br />
									Stage 1: design + design team sign off
									<br />
									Stage 2: engineering sign off <br />
									Stage 3: stakeholder sign off
									<br />
									Stage 4: build <br />
									Stage 5: demo <br />
									<br />
									Below is a rough timeline:
								</p>
								<Img fluid={image.design_sprint.childImageSharp.fluid} />
							</div>
							<hr
								style={{
									backgroundColor: "grey",
									width: "400px",
									margin: "4rem auto",
								}}
							/>
							<h3>Stack</h3>
							<div
								style={{
									display: "flex",
									marginTop: "4rem",
									justifyContent: "space-evenly",
									alignItems: "center",
								}}
							>
								<Card
									image={image.design.childImageSharp.fluid}
									title="Design System"
								/>
								<p
									style={{
										fontSize: "56px",
										color: "lightgrey",
										paddingLeft: "4rem",
									}}
								>
									+
								</p>
								<Card
									image={image.drupal.childImageSharp.fluid}
									title="Drupal + Layout"
								/>
							</div>
						</div>
					</section>
					<section className="row full">
						<h3
							style={{ textAlign: "center", margin: "0 auto", padding: "4rem" }}
						>
							What
						</h3>
						<div className="col-12">
							<CardLeft
								key="1"
								image={image.flex.childImageSharp.fluid}
								title="Flexibility"
								description="All components are designed with all breakpoints considered and how they’d behaviour with other components in the same section."
							/>
							<br />
							<CardRight
								key="2"
								image={image.configure.childImageSharp.fluid}
								title="Configure"
								description="The controller: in this panel the user chooses and creates the content that is populated in on the page.
                  Everything from, titles to forms to carousels to SVGs."
							/>
							<br />
							<CardLeft
								key="1"
								image={image.structure.childImageSharp.fluid}
								title="Structure"
								description="We worked together with all the stakeholders ( Marketing, Institute & Editorial ) to build a flexible yet structurally sound layout with potential infinity combination — this was important to us to allow all parties to create with as little restriction as possible."
							/>
							<div style={{ padding: "8rem", textAlign: "center" }}>
								<h3>Output</h3>

								<Carousel
									style={{ color: "#006AFF", backgroundColor: "#006AFF" }}
									one={image.example1.childImageSharp.fluid}
									two={image.example2.childImageSharp.fluid}
									three={image.example3.childImageSharp.fluid}
								/>
							</div>
						</div>
					</section>
				</section>
				<section
					style={{
						margin: "0 auto",
						padding: "2rem",
						backgroundColor: "#F5F5F5",
					}}
				>
					<h3 style={{ textAlign: "center", padding: "2rem" }}>Result</h3>
					<div
						style={{
							maxWidth: "1000px",
							margin: "0 auto",
							padding: "4rem 0",
							display: "flex",
							justifyContent: "space-evenly",
							flexWrap: "wrap",
							alignItems: "baseline",
						}}
					>
						<CardIcon
							icon={<Clipboard />}
							title=""
							description="Consistent and up-to-date across the whole site"
						/>
						<CardIcon
							icon={<Hundred />}
							title=""
							description="Autonomy of the process of building and publishing a page on site"
						/>
						<CardIcon
							icon={<ClockTwo height="5rem" width="5rem" />}
							title=""
							description="Regained engineering time. Building products not pages"
						/>
					</div>
				</section>
				<div
					className="row"
					style={{
						backgroundColor: "#006AFF",
						padding: "4rem",
					}}
				>
					<div
						style={{
							textAlign: "center",
							margin: "0 auto",
							width: "70%",
							color: "white",
						}}
					>
						<TitleP
							title="Next in version II"
							paragraph="Our aim was to make the shop window amazing for the final user, and once MVP was launched; work with the internal team to organise and tidy inside the shop if you will. Below are some of the feature we plan to implement"
						/>
					</div>
				</div>
				<Img
					fluid={image.wip.childImageSharp.fluid}
					alt="working in progress"
				/>
			</Layout>
		</div>
	)
}

export default Pagebuilder
