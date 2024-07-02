import { useNavigate } from "react-router";
import styles from "./home.module.less";

const Home = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate("/login");
	};
	return (
		<div className={styles.home}>
			<h1>Home</h1>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Home;
