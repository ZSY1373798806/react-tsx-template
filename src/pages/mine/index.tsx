import { useNavigate } from "react-router";
import styles from "./mine.module.less";

const Mine = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/");
	};
	return (
		<div className={styles.mine}>
			<h1>Mine</h1>
			<button onClick={handleClick}>Home</button>
		</div>
	);
};

export default Mine;
