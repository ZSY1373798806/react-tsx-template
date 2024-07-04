import { useNavigate } from "react-router";
import styles from "./mine.module.less";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { useEffect } from "react";
import { fetchUserInfo, userInfoData } from "@/store/slices/commonSlice";

const Mine = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const userInfo = useAppSelector(userInfoData);

	const handleClick = () => {
		navigate("/");
	};
	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
	};

	useEffect(() => {
		dispatch(fetchUserInfo());
		console.log("mine");
	}, [dispatch]);

	return (
		<div className={styles.mine}>
			<h1>Mine</h1>
			<button onClick={handleClick}>Home</button>
			<button onClick={handleLogout}>Logout</button>
			<div>
				{userInfo.name}, {userInfo.phone}
			</div>
		</div>
	);
};

export default Mine;
