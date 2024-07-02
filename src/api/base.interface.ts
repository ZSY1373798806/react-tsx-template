export interface BaseResponseProps<T> {
	code: number;
	data: T;
	msg: string;
}
