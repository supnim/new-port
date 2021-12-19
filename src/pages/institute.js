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
import Img from "gatsby-image"

import InstituteImg from "../../content/assets/heros/institute_hero.svg"
import course from "../components/gifs/institute/course.gif"
import process from "../components/gifs/institute/process.gif"

function Institute() {
	const image = useStaticQuery(graphql`
		query {
			one: file(relativePath: { eq: "projects/institute/route-1.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			two: file(relativePath: { eq: "projects/institute/route-2.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			three: file(relativePath: { eq: "projects/institute/route-3.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			four: file(relativePath: { eq: "projects/institute/route-4.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			five: file(relativePath: { eq: "projects/institute/route-5.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			mix: file(relativePath: { eq: "projects/institute/mix.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			home: file(relativePath: { eq: "projects/institute/home.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			cat: file(relativePath: { eq: "projects/institute/courses-cat.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			page: file(relativePath: { eq: "projects/institute/course-page.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			map: file(relativePath: { eq: "projects/institute/sitemap.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			catfinished: file(
				relativePath: { eq: "projects/institute/courses-cat-finished.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			pagefinished: file(
				relativePath: { eq: "projects/institute/course-page-finished.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			blog: file(relativePath: { eq: "projects/institute/blog.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			end: file(relativePath: { eq: "projects/institute/end.png" }) {
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

	const style = {
		color: "white",
		border: "4px solid #870AF3",
		backgroundColor: "#870AF3",
	}

	return (
		<div>
			<Layout>
				<SEO
					title="Institute"
					keywords={[`product`, `designer`, `london`, `nimesh`]}
				/>
				<InstituteImg width="100%" height="auto" />
				<div style={{ margin: "0 2rem" }}>
					{" "}
					<Brief
						style={briefStyle}
						title="Brief"
						paragraph={
							<p>
								To align and future-proof. Tes Institute is a leading provider
								of online courses and to visually represent it as so. this is
								what it looked like before:{" "}
								<a href="https://web.archive.org/web/20200513133158/https://www.tes.com/institute/">
									<b>this</b>
								</a>
							</p>
						}
					/>
				</div>
				<section
					style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 0" }}
				>
					<div style={{ textAlign: "center" }}>
						<TitleP
							title="              Wireframing"
							paragraph="Figuring out the structure and sketching out the foundation of the rebuild"
						/>
					</div>

					<div
						style={{
							width: "70%",
							margin: "4rem auto",
							border: "2px solid #870AF3",
						}}
					>
						<Carousel
							style={style}
							one={image.map.childImageSharp.fluid}
							oneAlt="site map structure"
							two={image.home.childImageSharp.fluid}
							twoAlt="homepage layout"
							three={image.cat.childImageSharp.fluid}
							threeAlt="course catalogue page"
							four={image.page.childImageSharp.fluid}
							fourAlt="course detail page"
						/>
					</div>
				</section>
				<section className="row full">
					<div className="col-12">
						<CardLeft
							key="1"
							image={image.mix.childImageSharp.fluid}
							title="Art direction"
							description="First, I explored styling, something that is in the theme of the current but still evolving it"
						/>
						<br />
						<div>
							<Carousel
								style={{ color: "black" }}
								one={image.one.childImageSharp.fluid}
								oneAlt="One"
								two={image.two.childImageSharp.fluid}
								twoAlt="Two"
								three={image.three.childImageSharp.fluid}
								threeAlt="Three"
								four={image.four.childImageSharp.fluid}
								fourAlt="Four"
								five={image.five.childImageSharp.fluid}
								fiveAlt="Five"
							/>
						</div>
						<br />
						<CardRight
							key="2"
							image={image.one.childImageSharp.fluid}
							title="Choosen direction"
							description="Even though the other routes were great in their own right, this one took what was already established and elevated it"
						/>
						<br />
						<div className="row">
							<div className="col-6" style={{ backgroundColor: "#F5F5F5" }}>
								<img src={course} alt="course gif" />
							</div>
							<div
								className="col-6"
								style={{ margin: "auto", padding: "5rem" }}
							>
								<TitleP
									title="Component"
									paragraph="I componentized the rebuild to make it more efficient and move away from making one off things, plus this allows us to build pages fast"
								/>
							</div>
						</div>
						<div className="row" style={{ backgroundColor: "#F5F5F5" }}>
							<div className="col-6">
								<img src={process} alt="process gif" />
							</div>
							<div className="col-6">
								<Carousel
									style={{ color: "black" }}
									one={image.pagefinished.childImageSharp.fluid}
									two={image.catfinished.childImageSharp.fluid}
									three={image.blog.childImageSharp.fluid}
								/>
							</div>
						</div>
						<div
							style={{
								textAlign: "center",
								maxWidth: "800px",
								padding: "8rem 0",
								margin: "0 auto",
							}}
						>
							<TitleP
								title="End result"
								paragraph={
									<p>
										a coherent user journey with the right amount of information
										at each stage to allow the user to make the right decision.
										Live site{" "}
										<a href="https://www.tes.com/institute">
											<b>here</b>
										</a>
									</p>
								}
							/>
						</div>
						<Img fluid={image.end.childImageSharp.fluid} />
					</div>
				</section>
			</Layout>
		</div>
	)
}

export default Institute
