exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
    createRedirect({
        fromPath: `/blog/first-post`,
        redirectInBrowser: true,
        toPath: `/blog/about-me`,
      })
}