import { useNavigate } from "react-router";
import styles from "./mine.module.less";

const Mine = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/");
	};
	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
	};
	return (
		<div className={styles.mine}>
			<h1>Mine</h1>
			<button onClick={handleClick}>Home</button>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default Mine;
