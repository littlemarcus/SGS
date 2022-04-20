import * as React from "react";
import Layout from "../components/layout";

const AboutPage = ({serverData}) => {
	return (
		<Layout pageTitle="About Me">
			<p>
				Hi there! I'm the proud creator of this site, which I built with Gatsby.
			</p>
			<img alt="Happy dog" src={serverData.message} />
		</Layout>
	);
};
export default AboutPage;

export async function getServerData() {
	try {
		const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
		if (!res.ok) {
		  throw new Error(`Response failed`)
		}
		return {
		  props: await res.json(),
		}
	  } catch (error) {
		return {
		  status: 500,
		  headers: {},
		  props: {}
		}
	  }

}
