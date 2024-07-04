import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {}
// 声明初始化状态的类型
const initialState: InitialStateProps = {};
export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {},
	extraReducers() {},
});

export default loginSlice.reducer;
