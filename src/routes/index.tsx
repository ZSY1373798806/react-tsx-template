import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import HomeRoutes from "@/pages/home/routes";
import loginRoutes from "@/pages/login/routes";
import Layout from "@/components/Layout";

const authRoutes = [...HomeRoutes];

const routes = [
	...loginRoutes,
	{
		path: "/",
		element: <Layout />,
		children: [...authRoutes],
		errorElement: <ErrorBoundary />,
	},
];
console.log(routes);

const router = createBrowserRouter(routes, {
	basename: "/",
});

export default router;
