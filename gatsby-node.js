exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
    createRedirect({
        fromPath: `/blog/*`,
        toPath: "https://panmacmarcuslittlemain.gatsbyjs.io",
        statusCode: 200,
      });
}