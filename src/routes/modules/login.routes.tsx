import Loadable from "@/components/Loadable";
import React from "react";
import { RouteObject } from "react-router-dom";

const Login = React.lazy(
	() => import(/* webpackChunkName: "login-bundler" */ "@/pages/login")
);
const routes: RouteObject[] = [
	{
		path: "/login",
		element: (
			<Loadable>
				<Login />
			</Loadable>
		),
	},
];
export default routes;
