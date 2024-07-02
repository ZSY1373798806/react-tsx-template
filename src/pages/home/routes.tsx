import Loadable from "@/components/Loadable";
import React from "react";

const Home = React.lazy(
	(/* webpackChunkName: 'home-bundler' */) => import("@/pages/home")
);
const routes = [
	{
		path: "/",
		element: (
			<Loadable>
				<Home />
			</Loadable>
		),
	},
];
export default routes;
