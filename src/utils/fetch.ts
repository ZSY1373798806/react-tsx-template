import { initFetch, IMiddlewareFn, IConfig } from "@heisea/fetch";
// import store from "@/store";

function error(message: string) {
	// Toast.show({
	// 	content: message,
	// 	maskClickable: false,
	// });
	console.log(message);
}
const createFetch = initFetch({
	baseURL: process.env.REACT_APP_FETCH_BASE_URL,
	errTipFn: error,
	ignoreUrlForErrTip: [],
	modifyAxiosInstance(instance, obj) {
		/* 修改baseURL */
		if (obj.url === "/base/xxx") {
			instance.defaults.baseURL = "/code";
		}
	},
});

const requestHeaderMiddleware = (
	config: IConfig,
	enhanceFetch: IMiddlewareFn
): IMiddlewareFn => {
	const token = "xxx";
	// 头部需要塞入获取的token的url
	config.headers = {
		authorization: token ? `Bearer ${token}` : "",
		"CUSTOM-ATTRIBUTE": "	xxx",
	};
	if (process.env.NODE_ENV === "development") {
		config.headers = {
			...config.headers,
		};
	}
	return enhanceFetch(config, () => {
		/* empty */
	});
};

const handleUnauthorized = (
	config: IConfig,
	enhancedFetch: IMiddlewareFn
): IMiddlewareFn => {
	return enhancedFetch(config, () => {}).catch((err: unknown) => {
		if ((err as { status: number }).status === 401) {
			// TODO登录过期
		}
	});
};

const fetch = createFetch([requestHeaderMiddleware, handleUnauthorized]);

export default fetch;
