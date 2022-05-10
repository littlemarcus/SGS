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
			  headers: {
				//   "/*": [
				// 	"X-Frame-Options: DENY",
				// 	"X-XSS-Protection: 1; mode=block",
				// 	"X-Content-Type-Options: nosniff",
				// 	"Referrer-Policy: same-origin",
				// 	"X-Frame-Options: SAMEORIGIN",
				// 	"Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
				// 	"Set-Cookie: HttpOnly;Secure;SameSite=Strict"
				//   ]
			  },
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
