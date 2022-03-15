exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
	createRedirect({
    fromPath: `/*`,
    toPath: `/test/*`,
    conditions: {
      country: `mx`
    }
  });

  // createRedirect({
  //   fromPath: `/*`,
  //   toPath: `/test/*`,
  //   conditions: {
  //     country: `mx`
  //   }
  // });
}