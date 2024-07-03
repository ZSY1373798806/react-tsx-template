import fetch from "@/utils/fetch";
import {
	GetDemoParamsProps,
	GetDemoResponsesProps,
	PostDemoParamsProps,
	PutDemoParamsProps,
} from "./index.interface";

export const getDemo = (params: GetDemoParamsProps) =>
	fetch({
		url: "/api/xxx",
		method: "get",
		params,
	});

export const portDemo = (params: PostDemoParamsProps) =>
	fetch({
		url: "/api/xxx",
		method: "post",
		params,
	});

export const delDemo = (params: PutDemoParamsProps) =>
	fetch({
		url: "/api/xxx",
		method: "put",
		params,
	});

export const puDemo = (params: GetDemoResponsesProps) =>
	fetch({
		url: "/api/xxx",
		method: "delete",
		params,
	});

export const getUserInfo = () =>
	fetch({
		url: "/api/xxx/userInfo",
		method: "get",
		params: {},
	});
