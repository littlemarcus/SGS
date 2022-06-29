exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
    createRedirect({
        fromPath: `/blog/*`,
        // rewriting to a site on gatsby-cloud
        toPath: "https://contentfulredirecttest.gatsbyjs.io",
        statusCode: 200,
      });
}