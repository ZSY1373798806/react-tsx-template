export interface GetDemoParamsProps {
	id: string;
}

export interface PostDemoParamsProps {
	id: string;
}

export interface PutDemoParamsProps {
	id: string;
}

export interface DeleteDemoParamsProps {
	id: string;
}

export interface GetDemoResponsesProps {
	id: string;
	data: Array<string>;
}

export interface PostDemoResponseProps {
	id: string;
	data: Array<string>;
}

export interface PutDemoResponseProps {
	id: string;
	data: Array<string>;
}

export interface DeleteDemoResponseProps {
	id: string;
	data: Array<string>;
}

export interface UserInfoResponseProps {
	name: string;
	phone: string;
}
