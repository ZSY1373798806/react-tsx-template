import Loadable from "@/components/Loadable";
import React from "react";

const Login = React.lazy(
	(/* webpackChunkName: 'login-bundler' */) => import("@/pages/login")
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
