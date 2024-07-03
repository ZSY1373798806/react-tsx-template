import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./index.module.less";
import { useEffect } from "react";

const transition = { duration: 0.25, ease: "easeInOut" };

interface IProps {}

/**
 * 布局组件，header为头部组件，你可以在各业务模块中使用嵌套路由使用
 * 此通用布局容器
 * @param props
 * @constructor
 */
const Container = (props: IProps) => {
	const location = useLocation();

	useEffect(() => {
		console.log("location", location, location.key);
	}, [location]);
	return (
		<div>
			<div className={styles.header}>header</div>
			<div className={styles.body}>
				<AnimatePresence mode="sync">
					<motion.div
						key={location.key}
						initial="initial"
						animate="enter"
						variants={{
							initial: {
								scale: 0.9,
								opacity: 0.4,
								transformOrigin: "center",
								transition,
							},
							enter: {
								scale: 1,
								opacity: 1,
								transformOrigin: "top",
								transition,
							},
						}}
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>
			</div>
			<ScrollRestoration />
		</div>
	);
};

export default Container;
