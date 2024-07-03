import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { motion /* , AnimatePresence */ } from "framer-motion";
import styles from "./index.module.less";
import { useEffect } from "react";

interface IProps {}

const transition = { duration: 0.25, ease: "easeInOut" };
/**
 * 布局组件，header为头部组件，你可以在各业务模块中使用嵌套路由使用
 * 此通用布局容器
 * @param props
 * @constructor
 */
const Container = (props: IProps) => {
	const location = useLocation();

	const variants = {
		initial: {
			opacity: 0.4,
			transformOrigin: "center",
		},
		enter: {
			opacity: 1,
			transformOrigin: "top",
		},
		exit: { opacity: 0 },
	};

	useEffect(() => {
		console.log("location", location, location.key);
	}, [location]);
	return (
		<div>
			<div className={styles.header}>header</div>
			<div className={styles.body}>
				{/* TODO AnimatePresence + motion.div会引起页面加载两次，需要排查修复 */}
				{/* <AnimatePresence mode="wait" initial={false}> */}
				<motion.div
					key={location.key}
					initial="initial"
					animate="enter"
					variants={variants}
					transition={transition}
				>
					<Outlet />
				</motion.div>
				{/* </AnimatePresence> */}
			</div>
			{/* 在页面切换时保持滚动位置 */}
			<ScrollRestoration />
		</div>
	);
};

export default Container;
