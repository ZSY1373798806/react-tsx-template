import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import AuthLayout from "@/components/AuthLayout";

import HomeRoutes from "@/pages/home/routes";
import MineRoutes from "@/pages/mine/routes";
import loginRoutes from "@/pages/login/routes";

const authRoutes = [...HomeRoutes, ...MineRoutes];
const routes = [
	...loginRoutes,
	{
		path: "/",
		element: <AuthLayout />,
		children: [...authRoutes],
		errorElement: <ErrorBoundary />,
	},
];
console.log(routes);

const router = createBrowserRouter(routes, {
	basename: "/",
});

export default router;
