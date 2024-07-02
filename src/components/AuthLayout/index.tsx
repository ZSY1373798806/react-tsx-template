import { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
	children: JSX.Element;
}

const AuthLayout = (props: IProps) => {
	const { children } = props;
	const location = useLocation();
	// const location = window.Location;

	const auth = localStorage.getItem("auth");
	if (!auth) {
		// 重定向至login页面，但是保存用户试图访问的location，这样我们可以把登陆后的用户重定向至那个页面
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};

export default AuthLayout;
