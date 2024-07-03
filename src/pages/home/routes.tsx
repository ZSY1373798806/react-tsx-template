import Loadable from "@/components/Loadable";
import React from "react";

const Home = React.lazy(
	() => import(/* webpackChunkName: "home-bundler" */ "@/pages/home")
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
