import { useNavigate } from "react-router";
import styles from "./login.module.less";
import { useLocation } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleLogin = () => {
		localStorage.setItem("auth", "true");
		navigate(from, { replace: true });
	};
	return (
		<div className={styles.login}>
			<h1>Login</h1>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
