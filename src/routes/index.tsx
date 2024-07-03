import { RouteObject, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import AuthLayout from "@/components/AuthLayout";

import HomeRoutes from "@/pages/home/routes";
import MineRoutes from "@/pages/mine/routes";
import loginRoutes from "@/pages/login/routes";

/* 需要校验登录 */
const authRoutes: RouteObject[] = [
	{
		path: "/",
		element: <AuthLayout />,
		children: [...HomeRoutes, ...MineRoutes],
		errorElement: <ErrorBoundary />,
	},
];
/* 不需要校验登录 */
const whiteListRoutes: RouteObject[] = [
	/* TODO */
];
const routes = [...loginRoutes, ...authRoutes, ...whiteListRoutes];

console.log(routes);

const router = createBrowserRouter(routes, {
	basename: "/",
});

export default router;
