/**
 * 复制文本
 * @param text
 * @returns
 */
export const copyText = (text: string) => {
	return new Promise((resolve, reject) => {
		try {
			const input = document.createElement("input");
			input.setAttribute("readonly", "readonly");
			input.setAttribute("value", text);
			document.body.appendChild(input);
			input.select();
			input.setSelectionRange(0, 9999);
			if (document.execCommand("copy")) {
				document.execCommand("copy");
			}
			document.body.removeChild(input);
			resolve(true);
		} catch (e) {
			console.log(e);
			reject(false);
		}
	});
};

/**
 * 防抖
 * @param func
 * @param delay
 * @returns
 */
export const debounce = (func: Function, delay: number): Function => {
	let timer: ReturnType<typeof setTimeout> | null = null;
	return function (this: unknown, ...args: unknown[]) {
		if (timer !== null) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
};

/**
 * 对象深拷贝
 * @param obj
 * @returns
 */
export const deepCopy = <T>(obj: T): T => {
	if (typeof obj !== "object" || obj === null) {
		return obj;
	}
	if (Array.isArray(obj)) {
		const newArray = [];
		for (let i = 0; i < obj.length; i++) {
			newArray[i] = deepCopy(obj[i]);
		}
		return newArray as T;
	}
	const newObj: Record<string, unknown> = {};
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			newObj[key] = deepCopy(obj[key]);
		}
	}
	return newObj as T;
};

/**
 * px转vw
 * @param px
 * @returns
 */
export const px2Vw = (px: number): string => {
	return px / 3.75 + "vw";
};

/**
 * 数字千分位用逗号分隔
 * @param value 输入值
 * @returns 格式化后的字符串
 */
export const valueFormatter = (value: number | string) => {
	if (typeof value === "string") {
		return value;
	}
	if (value === undefined) {
		return "--";
	}
	try {
		// 创建Intl.NumberFormat对象
		const formatter = new Intl.NumberFormat("en-US", {
			maximumSignificantDigits: 20,
		});
		// 格式化数字
		return formatter.format(value);
	} catch (e) {
		console.error("valueFormatter error:", e);
		return value.toString();
	}
};

/**
 * 获取两个 JSON 数组的差集
 * @param a 第一个数组
 * @param b 第二个数组
 * @param key 用于比较的键
 * @returns 差集数组
 */
export function getDiffByJsonArray<T extends Record<string, unknown>>(
	a: T[],
	b: T[],
	key: keyof T
): T[] {
	const aKeys = a.map((item) => String(item[key]));
	const bKeys = b.map((item) => String(item[key]));
	const arr = a.concat(b);
	return arr.filter(
		(item) =>
			!aKeys.includes(String(item[key])) || !bKeys.includes(String(item[key]))
	);
}

/**
 * 检测当前浏览器类型
 * @returns 包含浏览器信息的对象
 */
export const browser = (): {
	trident: boolean;
	presto: boolean;
	webKit: boolean;
	gecko: boolean;
	mobile: boolean;
	ios: boolean;
	android: boolean;
	iPhone: boolean;
	iPad: boolean;
	webApp: boolean;
	wx: boolean;
	QQ: boolean;
	iphoneX: boolean;
} => {
	const userAgent = navigator.userAgent.toLowerCase();

	return {
		trident: userAgent.indexOf("trident") > -1,
		presto: userAgent.indexOf("presto") > -1,
		webKit: userAgent.indexOf("applewebkit") > -1,
		gecko: userAgent.indexOf("gecko") > -1 && userAgent.indexOf("khtml") === -1,
		mobile: /applewebkit.*mobile.*/.test(userAgent),
		ios: /\(i[^;]+;( u;)? cpu.+mac os x/.test(userAgent),
		android:
			userAgent.indexOf("android") > -1 || userAgent.indexOf("linux") > -1,
		iPhone: userAgent.indexOf("iphone") > -1,
		iPad: userAgent.indexOf("ipad") > -1,
		webApp: userAgent.indexOf("safari") === -1,
		wx: userAgent.indexOf("micromessenger") > -1,
		QQ: /\sQQ\//.test(userAgent),
		iphoneX:
			/iphone/gi.test(navigator.userAgent) &&
			window.screen.height === 812 &&
			window.screen.width === 375,
	};
};

/**
 * json数组转tree
 * @param arr 原数组
 * @param rootId 根节点id
 * @param id id
 * @param pid pid
 */
export function jsonArray2Tree<T extends Record<string, unknown>>(
	arr: T[],
	rootId: string | number,
	id: keyof T,
	pid: keyof T
): T[] {
	// 浅复制出一份数据并加上 children 字段
	const obj: { [key: string]: T & { children: T[] } } = {};
	arr.forEach((v) => {
		obj[String(v[id])] = { ...v, children: [] };
	});

	const tree: T[] = [];
	arr.forEach((v) => {
		if (String(v[pid]) === String(rootId)) {
			tree.push(v);
		}
		// 拿此刻循环值的 pId 去复制数据里面找到对应父级然后塞到它的 children 中
		obj[String(v[pid])]?.children.push(v);
	});
	return tree;
}
