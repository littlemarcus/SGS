module.exports = {
	siteMetadata: {
		title: `schweet gatsby site`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
		{
			resolve: `gatsby-plugin-gatsby-cloud`,
			options: {
			  headers: {},
			  allPageHeaders: [],
			  mergeSecurityHeaders: true,
			  mergeLinkHeaders: true,
			  mergeCachingHeaders: true,
			  transformHeaders: (headers, path) => headers,
			  generateMatchPathRewrites: true,
			},
		  },
		"gatsby-plugin-mdx",
		"gatsby-transformer-sharp"
	],
	trailingSlash: "always"
};
