import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./index.module.less";

const transition = { duration: 0.25, ease: "easeInOut" };

interface IProps {}

/**
 * 布局组件，header为头部组件，你可以在各业务模块中使用嵌套路由使用
 * 此通用布局容器
 * @param props
 * @constructor
 */
const Layout = (props: IProps) => {
	const location = useLocation();
	return (
		<div>
			<AnimatePresence mode="wait">
				<div className={styles.header}>header</div>
				<div className={styles.body}>
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
				</div>
			</AnimatePresence>
			<ScrollRestoration />
		</div>
	);
};

export default Layout;
