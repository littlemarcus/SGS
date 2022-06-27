exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
    createRedirect({
        fromPath: `/blog/*`,
        toPath: "https://contentfulredirecttest.gatsbyjs.io",
        statusCode: 200,
      });
}