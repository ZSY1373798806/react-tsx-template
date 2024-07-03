import { useNavigate } from "react-router";
import styles from "./login.module.less";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleLogin = () => {
		localStorage.setItem("auth", "true");
		console.log("from", from);
		navigate(from, { replace: true });
	};

	useEffect(() => {
		console.log("login");
	}, []);

	return (
		<div className={styles.login}>
			<h1>Login</h1>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
