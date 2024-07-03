import Loadable from "@/components/Loadable";
import React from "react";

const Login = React.lazy(
	() => import(/* webpackChunkName: "login-bundler" */ "@/pages/login")
);
const routes = [
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
