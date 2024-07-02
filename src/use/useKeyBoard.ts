import { useEffect } from "react";

/**
 * 监听keyCode的自定义hooks, 当用户按键的值为keyCode参数的时候，调用回调函数
 * @param keyCode 键盘对应的数字
 * @param cb 回调函数
 */
export function useKeyBoard(keyCode: number, cb: (e: KeyboardEvent) => void) {
	const listKeyDown = async (e: KeyboardEvent) => {
		if (e.keyCode === keyCode) {
			cb && cb(e);
		}
	};
	useEffect(() => {
		window.addEventListener("keydown", listKeyDown);
		return () => {
			window.removeEventListener("keydown", listKeyDown);
		};
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, []);
}
