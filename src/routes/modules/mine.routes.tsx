import Loadable from "@/components/Loadable";
import React from "react";
import { RouteObject } from "react-router-dom";

const Mine = React.lazy(
	() => import(/* webpackChunkName: "mine-bundler" */ "@/pages/mine")
);
const routes: RouteObject[] = [
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
