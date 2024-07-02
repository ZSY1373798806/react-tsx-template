import { useNavigate } from "react-router";
import styles from "./login.module.less";

const Login = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate("/");
	};
	return (
		<div className={styles.login}>
			<h1>Login</h1>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
