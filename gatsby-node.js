exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
    createRedirect({
        fromPath: `/first-post`,
        redirectInBrowser: true,
        toPath: `https://www.eql.xyz/en-US/cookie-policy/`,
        statusCode: 200,
      })
}