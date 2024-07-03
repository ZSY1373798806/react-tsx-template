import { Navigate, useLocation } from "react-router-dom";
import Container from "../Container";

interface IProps {}

const AuthLayout = (props: IProps) => {
	const location = useLocation();

	const auth = localStorage.getItem("auth");
	if (!auth) {
		// 重定向至login页面，但是保存用户试图访问的location，这样我们可以把登陆后的用户重定向至那个页面
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return <Container />;
};

export default AuthLayout;
