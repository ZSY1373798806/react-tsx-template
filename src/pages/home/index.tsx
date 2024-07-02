import { useNavigate } from "react-router";
import styles from "./home.module.less";

const Home = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/mine");
	};
	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
	};
	return (
		<div className={styles.home}>
			<h1>Home</h1>
			<button onClick={handleClick}>Mine</button>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default Home;
