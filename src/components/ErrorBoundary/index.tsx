import { useRouteError, json } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.error("error", error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
		</div>
	);
};

export default ErrorPage;

export const loader = () => {
	console.log("ErrorPage loader ------------");
	throw json(
		{
			sorry: "You have been fired.",
			hrEmail: "hr@bigco.com",
		},
		{ status: 401 }
	);
};
