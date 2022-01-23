import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>I'm making this by following the gatsby tutorial</p>
			<StaticImage src="../images/sad_knicks_pepe.jpeg" alt="sad knicks pepe" />
		</Layout>
	);
};

export default IndexPage;
