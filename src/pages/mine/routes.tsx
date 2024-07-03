import Loadable from "@/components/Loadable";
import React from "react";

const Mine = React.lazy(
	() => import(/* webpackChunkName: "mine-bundler" */ "@/pages/mine")
);
const routes = [
	{
		path: "/mine",
		element: (
			<Loadable>
				<Mine />
			</Loadable>
		),
	},
];
export default routes;
