const urljoin = require("url-join")
const siteConfig = require("./siteConfig")

module.exports = {
	siteMetadata: {
		title: siteConfig.name,
		author: siteConfig.author,
		description: siteConfig.description,
		siteUrl: urljoin(siteConfig.url, siteConfig.prefix),
		social: {
			twitter: siteConfig.twitter,
		},
	},

	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/components`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets/photography`,
				name: `photography`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets/heros`,
				name: `heros`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1360,
							withWebp: true,
							showCaptions: true,
							quality: 75,
							wrapperStyle: `margin: 7vw 0;`,
						},
					},
					{
						resolve: "gatsby-remark-embed-video",
						options: {
							width: 800,
							height: 450,
							related: false,
							noIframeBorder: true,
							allowfullscreen: true,
						},
					},

					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					{
						resolve: `gatsby-transformer-remark`,
						options: {
							plugins: [`gatsby-remark-responsive-iframe`],
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				// Defaults used for gatsbyImageData and StaticImage
				defaults: {},
				// Set to false to allow builds to continue on image errors
				failOnError: false,
				// deprecated options and their defaults:
				base64Width: 20,
				forceBase64Format: `png`, // valid formats: png,jpg,webp
				stripMetadata: true,
				defaultQuality: 50,
			},
		},
		`gatsby-remark-embed-video`,
		`gatsby-remark-responsive-iframe`,
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [
					require("postcss-easy-import")(),
					require("postcss-custom-properties")({ preserve: false }),
					require("postcss-color-function")(),
					require("autoprefixer")({ browsers: ["last 2 versions"] }),
				],
			},
		},
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true, // Print removed selectors and processed file names
				// develop: true, // Enable while using `gatsby develop`
				// tailwind: true, // Enable tailwindcss support
				// whitelist: ['whitelist'], // Don't remove this selector
				ignore: ["/carousel.css"], // Ignore files/folders
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `G-V3FKP51EL9`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteConfig.name,
				short_name: siteConfig.shortName,
				start_url: siteConfig.prefix,
				background_color: `#ffffff`,
				theme_color: `#000`,
				display: `minimal-ui`,
				icon: `content/assets/sup.png`,
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/, // See below to configure properly
				},
			},
		},
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-smoothscroll`,
		{
			resolve: "gatsby-plugin-zopfli",
			options: {
				extensions: ["css", "html", "js", "svg"],
			},
		},
	],
}
