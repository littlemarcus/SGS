exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
    createRedirect({
        fromPath: `/blog/*`,
        toPath: "https://www.google.com/",
        statusCode: 200,
      });
}