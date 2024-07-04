import Loadable from "@/components/Loadable";
import React from "react";
import { RouteObject } from "react-router-dom";

const Home = React.lazy(
	() => import(/* webpackChunkName: "home-bundler" */ "@/pages/home")
);
const routes: RouteObject[] = [
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
